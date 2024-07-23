"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const typeorm_1 = require("typeorm");
const app_data_source_1 = require("../../main/infra/typeorm/connection/app-data-source");
const Messages_1 = require("./infra/typeorm/Entities/Messages");
const Contacts_1 = require("../contacts/infra/typeorm/Entities/Contacts");
const Chats_1 = require("../chats/infra/typeorm/Entities/Chats");
const server_1 = require("../../main/infra/http/server");
const aws_1 = require("../../main/infra/upload/aws");
const AppError_1 = require("@error/AppError");
class MessageService {
    constructor() {
        this.messageRepository = app_data_source_1.myDataSource.getRepository(Messages_1.Messages);
        this.contactsRepository = app_data_source_1.myDataSource.getRepository(Contacts_1.Contacts);
        this.chatRepository = app_data_source_1.myDataSource.getRepository(Chats_1.Chats);
        //Verifica se a conexão estabelicida antes de obter acesso a entidade.
        if (!app_data_source_1.myDataSource.isInitialized) {
            app_data_source_1.myDataSource
                .initialize()
                .then(() => {
                this.messageRepository = app_data_source_1.myDataSource.getRepository(Messages_1.Messages);
            })
                .catch((error) => console.error("Error ao incializar a conexão:", error));
        }
    }
    getAllMessages() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.messageRepository.find();
        });
    }
    getOneMessagesClient(projectId, page, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * pageSize;
            const project = yield this.messageRepository
                .createQueryBuilder('m')
                // .where('m.supportId=:supportId', { supportId })
                .where('m.projectId=:projectId', { projectId })
                // .skip(skip)
                // .take(pageSize)
                .orderBy('m.createdAt', 'ASC')
                .getMany();
            return project;
        });
    }
    getOneMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield this.messageRepository.findOneBy({
                id,
            });
            if (!project) {
                throw new AppError_1.AppError("Message not found!");
            }
            return project;
        });
    }
    getUpdateMessage(id, messages) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield this.messageRepository.findOneBy({
                id,
            });
            if (!project) {
                throw new AppError_1.AppError("Project not found!");
            }
            project.messages = messages;
            project.msgEdt = true;
            yield this.messageRepository.save(project);
            return project;
        });
    }
    getUpdateSocketAction(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield this.messageRepository.findOneBy({
                id,
            });
            if (project) {
                project.msgEdt = false;
                yield this.messageRepository.save(project);
            }
            else {
                return { message: "ProjectId not found" };
            }
            return project;
        });
    }
    getDeleteMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const message = yield this.messageRepository.findOneBy({
                    id,
                });
                if (!message) {
                    return { message: "Message not found" };
                }
                yield this.messageRepository.delete({ id });
                server_1.io.to(message.projectId).emit("deletedMessage", { id: message.id });
                return { message: "Message deleted successfully" };
            }
            catch (error) {
                return { error: "Error when deleting" };
            }
        });
    }
    getNewMessages(statusAttention) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const selectIdClients = yield this.messageRepository
                    .createQueryBuilder("m")
                    .select("m.projectId", "projectId")
                    .addSelect("MAX(m.createdAt)", "latestCreatedAt")
                    .groupBy("m.projectId");
                let statusChat = statusAttention;
                if (statusAttention != '') {
                    statusChat = `c.statusAttention='${statusAttention}'`;
                }
                else {
                    statusChat = '';
                    console.log('Veio aqui 2');
                }
                const result = yield this.messageRepository
                    .createQueryBuilder("m")
                    .innerJoin(`(${selectIdClients.getQuery()})`, "sub", "m.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt")
                    .leftJoin("chats", "c", "m.chatId = c.id")
                    .select([
                    "m.projectId",
                    "m.createdAt",
                    "m.messages",
                    "m.id",
                    "c.supportId",
                    "c.id as chatId",
                    `CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention`,
                ])
                    .where(statusChat)
                    .orderBy("m.createdAt", "DESC")
                    .getRawMany();
                // if (statusAttention) {
                //     result.andWhere("m.origin != :origin", { origin: 'support' });
                // }
                const newMessagens = result.map((item) => ({
                    id: item.m_id,
                    projectId: item.m_projectId,
                    supportId: item.c_supportId,
                    statusAttention: item.statusAttention,
                    messages: item.m_messages,
                    chatId: item.chatId,
                    createdAt: item.m_createdAt,
                }));
                return newMessagens;
            }
            catch (error) {
                throw new AppError_1.AppError(`${error}`);
            }
        });
    }
    getChatsRespondingToSupport(supportId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const selectIdClients = yield this.messageRepository
                    .createQueryBuilder("m")
                    .select("m.projectId", "projectId")
                    .addSelect("MAX(m.createdAt)", "latestCreatedAt")
                    .groupBy("m.projectId");
                const result = yield this.messageRepository
                    .createQueryBuilder("m")
                    .innerJoin(`(${selectIdClients.getQuery()})`, "sub", "m.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt")
                    .leftJoin("chats", "c", "m.chatId = c.id")
                    .select([
                    "m.projectId",
                    "m.createdAt",
                    "m.messages",
                    "m.id",
                    "c.supportId",
                    "c.id as chatId",
                    `CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention`,
                ])
                    .where("m.origin!='support'")
                    .andWhere("m.supportId=:supportId", { supportId })
                    .orderBy("m.createdAt", "DESC")
                    .getRawMany();
                const newMessagens = result.map((item) => ({
                    id: item.m_id,
                    projectId: item.m_projectId,
                    supportId: item.c_supportId,
                    statusAttention: item.statusAttention,
                    messages: item.m_messages,
                    chatId: item.chatId,
                    createdAt: item.m_createdAt,
                }));
                return newMessagens;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getSearchProject(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const selectIdClients = yield this.messageRepository
                    .createQueryBuilder("m")
                    .select("m.projectId", "projectId")
                    .addSelect("MAX(m.createdAt)", "latestCreatedAt")
                    .groupBy("m.projectId");
                const result = yield this.messageRepository
                    .createQueryBuilder("m")
                    .innerJoin(`(${selectIdClients.getQuery()})`, "sub", "m.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt")
                    .leftJoin("chats", "c", "m.chatId = c.id")
                    .select([
                    "m.projectId",
                    "m.createdAt",
                    "m.messages",
                    "m.id",
                    "c.supportId",
                    "c.id as chatId",
                    `CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention`,
                ])
                    .where("m.projectId=:projectId", { projectId })
                    .orderBy("m.createdAt", "DESC")
                    .getRawMany();
                console.log("selectIdClients");
                console.log(result);
                const newMessagens = result.map((item) => ({
                    id: item.m_id,
                    projectId: item.m_projectId,
                    supportId: item.c_supportId,
                    statusAttention: item.statusAttention,
                    messages: item.m_messages,
                    chatId: item.chatId,
                    createdAt: item.m_createdAt,
                }));
                return newMessagens;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getFilterToStatusSidebar(statusAttention) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const selectIdClients = yield this.messageRepository
                    .createQueryBuilder("m")
                    .select("m.projectId", "projectId")
                    .addSelect("MAX(m.createdAt)", "latestCreatedAt")
                    .groupBy("m.projectId");
                const result = yield this.messageRepository
                    .createQueryBuilder("m")
                    .innerJoin(`(${selectIdClients.getQuery()})`, "sub", "m.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt")
                    .leftJoin("chats", "c", "m.chatId = c.id")
                    .select([
                    "m.projectId",
                    "m.createdAt",
                    "m.messages",
                    "m.id",
                    "c.supportId",
                    "c.id as chatId",
                    `CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention`,
                ])
                    .where("c.statusAttention=:statusAttention", { statusAttention })
                    .orderBy("m.createdAt", "DESC")
                    .getRawMany();
                console.log("selectIdClients");
                console.log(result);
                const newMessagens = result.map((item) => ({
                    id: item.m_id,
                    projectId: item.m_projectId,
                    supportId: item.c_supportId,
                    statusAttention: item.statusAttention,
                    messages: item.m_messages,
                    chatId: item.chatId,
                    createdAt: item.m_createdAt,
                }));
                return newMessagens;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getSearchByWordOrPhrase(text, supportId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const word = text.split(" ");
                const resultSearch = yield this.messageRepository
                    .createQueryBuilder("m")
                    .where("m.supportId=:supportId", { supportId })
                    .andWhere(new typeorm_1.Brackets((qb) => {
                    qb.where(`m.messages LIKE :text`, { text: `%${text}%` });
                    word.forEach((word, index) => {
                        if (index === 0) {
                            qb.orWhere(`m.messages LIKE :word`, { word: `%${word}%` });
                        }
                        else {
                            qb.orWhere(`m.messages LIKE :word`, { word: `%${word}%` });
                        }
                    });
                }))
                    .orderBy("m.createdAt", "ASC")
                    .getMany();
                return resultSearch;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getSearchGenerationToSupport(text, supportId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const word = text.split(" ");
                const resultSearch = yield this.messageRepository
                    .createQueryBuilder("m")
                    .where("m.supportId = :supportId", { supportId })
                    .andWhere(new typeorm_1.Brackets((qb) => {
                    qb.andWhere("CONCAT(m.projectId, ' ', m.messages) LIKE :text", {
                        text: `%${text}%`,
                    });
                    word.forEach((word, index) => {
                        if (index === 0) {
                            qb.orWhere("CONCAT(m.projectId, ' ' , m.messages) LIKE :word0", { word0: `%${word}%` });
                        }
                        else {
                            qb.orWhere(`CONCAT(m.projectId, ' ', m.messages) LIKE :word${index}`, { [`word${index}`]: `%${word}%` });
                        }
                    });
                }))
                    .orderBy("m.createdAt", "ASC")
                    .getMany();
                return resultSearch;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getSearchGenerationToAdmin(text, supportId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resultSearch = yield this.messageRepository
                    .createQueryBuilder("m")
                    .where(`CONCAT(m.projectId," ",m.messages ) LIKE %${text}%`)
                    .orderBy("m.createdAt", "ASC")
                    .getMany();
                return resultSearch;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    uploadMedia(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(data);
                const { filename, filecontent, messages, key, userType, projectId, supportId, messageType, origin } = data;
                const urlImage = yield (0, aws_1.uploadToAws)(filename, filecontent);
                const message = {
                    userType,
                    projectId,
                    supportId,
                    messageType,
                    urlImage,
                    messages,
                    origin,
                };
                const msg = yield this.createMessage(message);
                const dataClient = {
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
                yield server_1.io.to(projectId).emit('clientMessage', dataClient);
                return;
            }
            catch (error) {
                console.log(error);
                return String(error);
            }
        });
    }
    createMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const { messageType, messages, origin, projectId, supportId, userType, urlImage } = message;
            const nameProject = yield this.messageRepository.findOneBy({
                projectId,
            });
            if (!nameProject) {
                try {
                    this.contactsRepository.create({ projectId });
                }
                catch (error) {
                    console.log(`Error: ${error}`);
                }
            }
            // const sID = supportId === null || supportId === '' || supportId === undefined ? '' : supportId
            const chat = yield this.chatRepository
                .createQueryBuilder("chat")
                .where("chat.projectId = :projectId", { projectId })
                .andWhere("chat.statusAttention IN (:...status)", {
                status: ["OPEN", "RESPONDING"],
            }) // Condição para o status
                .getOne();
            let chatId = chat === null || chat === void 0 ? void 0 : chat.id;
            if (!chat) {
                console.log("veio aqui com a mensagem");
                const newChat = yield this.chatRepository.create({
                    supportId: supportId,
                    projectId,
                    statusAttention: "OPEN",
                    dateIndex: new Date(),
                });
                const chat2 = yield this.chatRepository.save(newChat);
                chatId = chat2.id;
            }
            else {
                if (origin == "support" && !chat.supportId) {
                    chat.supportId = supportId;
                    chat.statusAttention = "RESPONDING";
                    yield this.chatRepository.save(chat);
                    yield server_1.io.to("support").emit("statusChat", {
                        chatId: chat.id,
                        statusChat: chat.statusAttention,
                    });
                    yield server_1.io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention });
                    //Atualiza na tabela de mensagem qual suporte está atendendo
                    yield this.messageRepository
                        .createQueryBuilder()
                        .update(Messages_1.Messages)
                        .set({ supportId: supportId })
                        .where("chatId = :chatId", { chatId: chat.id })
                        .execute();
                }
                else if (origin == "support" && chat.supportId) {
                    if (chat.supportId != supportId) {
                        chat.supportId = supportId;
                        yield this.chatRepository.save(chat);
                        yield server_1.io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention });
                    }
                    if (chat.statusAttention == "OPEN") {
                        chat.statusAttention = "RESPONDING";
                        yield this.chatRepository.save(chat);
                        yield server_1.io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention });
                    }
                }
            }
            const newMessage = this.messageRepository.create({
                messageType,
                chatId,
                messages,
                origin,
                projectId,
                supportId,
                userType,
                urlImage
            });
            return yield this.messageRepository.save(newMessage);
        });
    }
}
exports.MessageService = MessageService;
