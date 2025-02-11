"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageRepository = void 0;
var _typeorm = require("typeorm");
var _Messages = require("../Entities/Messages");
var _appDataSource = require("../../../../../main/infra/typeorm/connection/app-data-source");
var _Chats = require("../../../../../modules/chats/infra/typeorm/Entities/Chats");
var _Contacts = require("../../../../../modules/contacts/infra/typeorm/Entities/Contacts");
var _server = require("../../../../../main/infra/http/server");
var _AppError = require("../../../../../error/AppError");
var _aws = require("../../../../../main/infra/upload/aws");
var _OldMessages = require("../Entities/OldMessages");
class MessageRepository {
  constructor() {
    this.repositoryMessage = void 0;
    this.repositoryChat = void 0;
    this.repositoryContacts = void 0;
    this.repositoryOldMessage = void 0;
    this.next = void 0;
    this.repositoryMessage = _appDataSource.myDataSource.getRepository(_Messages.Messages);
    this.repositoryOldMessage = _appDataSource.myDataSource.getRepository(_OldMessages.OldMessages);
    this.repositoryChat = _appDataSource.myDataSource.getRepository(_Chats.Chats);
    this.repositoryContacts = _appDataSource.myDataSource.getRepository(_Contacts.Contacts);
  }
  async getIfInauguration() {
    const message = await this.repositoryMessage.find();
    if (message.length === 0) {
      return false;
    }
    return true;
  }
  async getOldMessages(id) {
    const message = await this.repositoryOldMessage.find({
      where: {
        idMessage: {
          id
        }
      },
      order: {
        createdAt: "DESC"
      }
    });
    if (message.length === 0) {
      throw new _AppError.AppError("Messages not found");
    }
    const oldMessages = message.map(item => ({
      supportId: item.supportId,
      oldMessage: item.oldMessage,
      createdAt: item.createdAt
    }));
    return oldMessages;
  }

  //Salva as mensagens enviada
  async createMessage(message) {
    try {
      //  console.log('111');
      const {
        messageType,
        messages,
        origin,
        projectId,
        supportId,
        userType,
        urlImage
      } = message;
      //  console.log('222');
      //   console.log(projectId);

      const nameProject = await this.repositoryContacts.findOneBy({
        projectId
      });
      //   console.log('333', nameProject);

      if (!nameProject) {
        //       console.log('444');
        const project = this.repositoryContacts.create({
          projectId
        });
        await this.repositoryContacts.save(project);
      }
      //   console.log('555');

      const chat = await this.repositoryChat.createQueryBuilder("chat").where("chat.projectId = :projectId", {
        projectId
      }).andWhere("chat.statusAttention IN (:...status)", {
        status: ["OPEN", "RESPONDING"]
      }).getOne();
      let chatId = chat?.id;
      //   console.log('777', chatId);

      if (!chat) {
        //   console.log("veio aqui com a mensagem");
        const newChat = this.repositoryChat.create({
          supportId: supportId,
          projectId,
          statusAttention: "OPEN",
          dateIndex: new Date()
        });
        const chatSave = await this.repositoryChat.save(newChat);
        chatId = chatSave.id;
      } else {
        if (origin === "support" && !chat.supportId) {
          // console.log('888');
          chat.supportId = supportId;
          chat.statusAttention = "RESPONDING";
          await this.repositoryChat.save(chat);
          await _server.io.to("support").emit("statusChat", {
            chatId: chat.id,
            statusChat: chat.statusAttention
          });
          await _server.io.to('support').emit('statusChat', {
            chatId: chat.id,
            statusChat: chat.statusAttention
          });
          await this.repositoryMessage.createQueryBuilder().update(_Messages.Messages).set({
            supportId: supportId
          }).where("chatId = :chatId", {
            chatId: chat.id
          }).execute();
        } else if (origin === "support" && chat.supportId) {
          if (chat.supportId !== supportId) {
            chat.supportId = supportId;
            await this.repositoryChat.save(chat);
            await _server.io.to('support').emit('statusChat', {
              chatId: chat.id,
              statusChat: chat.statusAttention
            });
          }
          if (chat.statusAttention === "OPEN") {
            chat.statusAttention = "RESPONDING";
            await this.repositoryChat.save(chat);
            await _server.io.to('support').emit('statusChat', {
              chatId: chat.id,
              statusChat: chat.statusAttention
            });
          }
        }
      }
      // console.log('101010');

      const newMessage = this.repositoryMessage.create({
        messageType,
        chatId,
        messages,
        origin,
        msgEdit: false,
        projectId,
        supportId,
        userType,
        urlImage,
        oldMessages: '[]'
      });
      return await this.repositoryMessage.save(newMessage);
    } catch (error) {
      // console.log('131313131', error);

      throw new _AppError.AppError('error', 400, {
        error
      });
    }
  }
  async update(id, message) {
    const getMessage = await this.repositoryMessage.findOneBy({
      id
    });
    if (!getMessage) {
      throw new _AppError.AppError("Message not found!");
    }
    const oldMessage = getMessage.messages;
    getMessage.messages = message;
    getMessage.msgEdit = true;
    const supportId = getMessage.supportId;
    await this.repositoryMessage.save(getMessage);
    const idMessage = getMessage.id;
    const newOldMessage = await this.repositoryOldMessage.create({
      oldMessage,
      idMessage: {
        id: idMessage
      },
      supportId
    });
    await this.repositoryOldMessage.save(newOldMessage);
    if (getMessage.origin === 'support') {
      //  console.log('veio aqui')
      await _server.io.to(getMessage.projectId).emit('supportMsgUpdate', {
        id: getMessage.id,
        updatedMessage: getMessage.messages
      });
    } else {
      await _server.io.to("support").emit('supportMsgUpdate', {
        id: getMessage.id,
        updatedMessage: getMessage.messages
      });
    }
    return getMessage;
  }
  async getFilterToStatusSidebar(statusAttention) {
    const selectIdClients = await this.repositoryMessage.createQueryBuilder("m").select("m.projectId", "projectId").addSelect("MAX(m.createdAt)", "latestCreatedAt").groupBy("m.projectId");
    const result = await this.repositoryMessage.createQueryBuilder("m").innerJoin(`(${selectIdClients.getQuery()})`, "sub", "m.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt").leftJoin("chats", "c", "m.chatId = c.id").select(["m.projectId", "m.createdAt", "m.messages", "m.id", "c.supportId", "c.id as chatId", `CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention`]).where("c.statusAttention=:statusAttention", {
      statusAttention
    }).orderBy("m.createdAt", "DESC").getRawMany();
    // console.log("selectIdClients");
    //console.log(result);
    const newMessagens = result.map(item => ({
      id: item.m_id,
      projectId: item.m_projectId,
      supportId: item.c_supportId,
      statusAttention: item.statusAttention,
      messages: item.m_messages,
      chatId: item.chatId,
      createdAt: item.m_createdAt
    }));
    return newMessagens;
  }
  async upldateSA(id) {
    const project = await this.repositoryMessage.findOneBy({
      id
    });
    if (!project) {
      throw new _AppError.AppError("ProjectId not found");
    }
    project.msgEdit = false;
    await this.repositoryMessage.save(project);
    return project;
  }
  async delete(id) {
    const message = await this.repositoryMessage.findOneBy({
      id
    });
    if (!message) {
      throw new _AppError.AppError("Message not found");
    }
    await this.repositoryMessage.delete({
      id
    });
    _server.io.to(message.projectId).emit("deletedMessage", {
      id: message.id
    });
    return "Message deleted successfully";
  }
  async getOneMessage(id) {
    const message = await this.repositoryMessage.findOneBy({
      id
    });
    if (!message) {
      throw new _AppError.AppError("Message not found");
    }
    return message;
  }
  async getNewMessages(statusAttention) {
    const selectIdClients = await this.repositoryMessage.createQueryBuilder("m").select("m.projectId", "projectId").addSelect("MAX(m.createdAt)", "latestCreatedAt").groupBy("m.projectId");
    let statusChat = '';
    if (statusAttention !== '') {
      statusChat = `c.statusAttention='${statusAttention}'`;
    }
    const result = await this.repositoryMessage.createQueryBuilder("m").innerJoin(`(${selectIdClients.getQuery()})`, "sub", "m.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt").leftJoin("chats", "c", "m.chatId = c.id").select(["m.projectId", "m.createdAt", "m.messages", "m.id", "c.supportId", "c.id as chatId", `CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention`]).where(statusChat).orderBy("m.createdAt", "DESC").getRawMany();
    // if (statusAttention) {
    //     result.andWhere("m.origin != :origin", { origin: 'support' });
    // }
    const newMessagens = result.map(item => ({
      id: item.m_id,
      projectId: item.m_projectId,
      supportId: item.c_supportId,
      statusAttention: item.statusAttention,
      messages: item.m_messages,
      chatId: item.chatId,
      createdAt: item.m_createdAt
    }));
    return newMessagens;
  }
  async getMessagesRespondingToSupport(supportId) {
    const selectIdClients = await this.repositoryMessage.createQueryBuilder("m").select("m.projectId", "projectId").addSelect("MAX(m.createdAt)", "latestCreatedAt").groupBy("m.projectId");
    const result = await this.repositoryMessage.createQueryBuilder("m").innerJoin(`(${selectIdClients.getQuery()})`, "sub", "m.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt").leftJoin("chats", "c", "m.chatId = c.id").select(["m.projectId", "m.createdAt", "m.messages", "m.id", "c.supportId", "c.id as chatId", `CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention`]).where("m.origin!='support'").andWhere("m.supportId=:supportId", {
      supportId
    }).orderBy("m.createdAt", "DESC").getRawMany();
    const newMessagens = result.map(item => ({
      id: item.m_id,
      projectId: item.m_projectId,
      supportId: item.c_supportId,
      statusAttention: item.statusAttention,
      messages: item.m_messages,
      chatId: item.chatId,
      createdAt: item.m_createdAt
    }));
    return newMessagens;
  }
  async getSearchProject(projectId) {
    const selectIdClients = await this.repositoryMessage.createQueryBuilder("m").select("m.projectId", "projectId").addSelect("MAX(m.createdAt)", "latestCreatedAt").groupBy("m.projectId");
    const result = await this.repositoryMessage.createQueryBuilder("m").innerJoin(`(${selectIdClients.getQuery()})`, "sub", "m.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt").leftJoin("chats", "c", "m.chatId = c.id").select(["m.projectId", "m.createdAt", "m.messages", "m.id", "c.supportId", "c.id as chatId", `CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention`]).where("m.projectId Like :projectId", {
      projectId: `%${projectId}%`
    }).orderBy("m.createdAt", "DESC").getRawMany();
    const newMessagens = result.map(item => ({
      id: item.m_id,
      projectId: item.m_projectId,
      supportId: item.c_supportId,
      statusAttention: item.statusAttention,
      messages: item.m_messages,
      chatId: item.chatId,
      createdAt: item.m_createdAt
    }));
    return newMessagens;
  }
  async getSearchByWordOrPhrase(text, supportId) {
    const word = text.split(" ");
    const resultSearch = await this.repositoryMessage.createQueryBuilder("m").where("m.supportId=:supportId", {
      supportId
    }).andWhere(new _typeorm.Brackets(qb => {
      qb.where(`m.messages LIKE :text`, {
        text: `%${text}%`
      });
      word.forEach((word, index) => {
        if (index === 0) {
          qb.orWhere(`m.messages LIKE :word`, {
            word: `%${word}%`
          });
        } else {
          qb.orWhere(`m.messages LIKE :word`, {
            word: `%${word}%`
          });
        }
      });
    })).orderBy("m.createdAt", "ASC").getMany();
    return resultSearch;
  }
  async getSearchGenerationToSupport(text, supportId) {
    const word = text.split(" ");
    const resultSearch = await this.repositoryMessage.createQueryBuilder("m").where("m.supportId = :supportId", {
      supportId
    }).andWhere(new _typeorm.Brackets(qb => {
      qb.andWhere("CONCAT(m.projectId, ' ', m.messages) LIKE :text", {
        text: `%${text}%`
      });
      word.forEach((word, index) => {
        if (index === 0) {
          qb.orWhere("CONCAT(m.projectId, ' ' , m.messages) LIKE :word0", {
            word0: `%${word}%`
          });
        } else {
          qb.orWhere(`CONCAT(m.projectId, ' ', m.messages) LIKE :word${index}`, {
            [`word${index}`]: `%${word}%`
          });
        }
      });
    })).orderBy("m.createdAt", "ASC").getMany();
    return resultSearch;
  }
  async getOneMessagesClient(projectId, page, pageSize) {
    const skip = (page - 1) * pageSize;
    const project = await this.repositoryMessage.createQueryBuilder('m')
    // .where('m.supportId=:supportId', { supportId })
    .where('m.projectId=:projectId', {
      projectId
    })
    // .skip(skip)
    // .take(pageSize)
    .orderBy('m.createdAt', 'ASC').getMany();
    return project;
  }
  async uploadMedia(data) {
    try {
      // console.log(data)
      const {
        filename,
        filecontent,
        messages,
        key,
        userType,
        projectId,
        supportId,
        messageType,
        origin
      } = data;
      const urlImage = await (0, _aws.uploadToAws)(filename, filecontent);
      const message = {
        userType,
        projectId,
        supportId,
        messageType,
        urlImage,
        messages,
        origin
      };
      const msg = await this.createMessage(message);
      const datatoSocket = {
        id: msg.id,
        chatId: msg.chatId,
        key,
        userType,
        projectId,
        supportId,
        messageType,
        messages,
        urlImage,
        origin,
        createdAt: msg.createdAt
      };
      if (origin === "support") {
        _server.io.to(projectId).emit('clientMessage', datatoSocket);
        _server.io.to('support').emit('supportResponse', datatoSocket);
      } else {
        _server.io.to('support').emit('supportMessage', datatoSocket);

        // if (supportId) {
        //     console.log('veio aqui upload')
        //     console.log(datatoSocket)
        //     io.to(supportId).emit('supportMessage', datatoSocket);
        //     io.to('support').emit('supportMessage', datatoSocket);

        // }else{
        //     console.log('veio aqui upload222222')
        //     console.log(datatoSocket)
        //     io.to('support').emit('supportMessage', datatoSocket);

        // }
      }
      return;
    } catch (error) {
      return;
    }
  }
}
exports.MessageRepository = MessageRepository;