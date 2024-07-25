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
exports.MessageRepository = void 0;
const typeorm_1 = require("typeorm");
const Messages_1 = require("../Entities/Messages");
const app_data_source_1 = require("@main/infra/typeorm/connection/app-data-source");
const Chats_1 = require("@modules/chats/infra/typeorm/Entities/Chats");
const server_1 = require("@main/infra/http/server");
const AppError_1 = require("@error/AppError");
const aws_1 = require("@main/infra/upload/aws");
class MessageRepository {
    constructor() {
        this.repositoryMessage = app_data_source_1.myDataSource.getRepository(Messages_1.Messages);
        this.repositoryChat = app_data_source_1.myDataSource.getRepository(Chats_1.Chats);
    }
    //Salva as mensagens enviada
    createMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const { messageType, messages, origin, projectId, supportId, userType, urlImage } = message;
            const nameProject = yield this.repositoryMessage.findOneBy({
                projectId,
            });
            if (!nameProject) {
                try {
                    this.repositoryContacts.create({ projectId });
                }
                catch (error) {
                    console.log(`Error: ${error}`);
                }
            }
            // const sID = supportId === null || supportId === '' || supportId === undefined ? '' : supportId
            const chat = yield this.repositoryChat
                .createQueryBuilder("chat")
                .where("chat.projectId = :projectId", { projectId })
                .andWhere("chat.statusAttention IN (:...status)", {
                status: ["OPEN", "RESPONDING"], // Condição para o status
            })
                .getOne();
            let chatId = chat === null || chat === void 0 ? void 0 : chat.id;
            if (!chat) {
                console.log("veio aqui com a mensagem");
                const newChat = yield this.repositoryChat.create({
                    supportId: supportId,
                    projectId,
                    statusAttention: "OPEN",
                    dateIndex: new Date(),
                });
                const chatSave = yield this.repositoryChat.save(newChat);
                chatId = chatSave.id;
            }
            else {
                if (origin == "support" && !chat.supportId) {
                    chat.supportId = supportId;
                    chat.statusAttention = "RESPONDING";
                    yield this.repositoryChat.save(chat);
                    yield server_1.io.to("support").emit("statusChat", {
                        chatId: chat.id,
                        statusChat: chat.statusAttention,
                    });
                    yield server_1.io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention });
                    //Atualiza na tabela de mensagem qual suporte está atendendo
                    yield this.repositoryMessage
                        .createQueryBuilder()
                        .update(Messages_1.Messages)
                        .set({ supportId: supportId })
                        .where("chatId = :chatId", { chatId: chat.id })
                        .execute();
                }
                else if (origin == "support" && chat.supportId) {
                    if (chat.supportId != supportId) {
                        chat.supportId = supportId;
                        yield this.repositoryChat.save(chat);
                        yield server_1.io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention });
                    }
                    if (chat.statusAttention == "OPEN") {
                        chat.statusAttention = "RESPONDING";
                        yield this.repositoryChat.save(chat);
                        yield server_1.io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention });
                    }
                }
            }
            const newMessage = this.repositoryMessage.create({
                messageType,
                chatId,
                messages,
                origin,
                projectId,
                supportId,
                userType,
                urlImage
            });
            return yield this.repositoryMessage.save(newMessage);
        });
    }
    update(id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield this.repositoryMessage.findOneBy({
                id,
            });
            if (!project) {
                throw new AppError_1.AppError("Project not found!");
            }
            project.messages = message;
            project.msgEdt = true;
            yield this.repositoryMessage.save(project);
            return project;
        });
    }
    upldateSA(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield this.repositoryMessage.findOneBy({
                id,
            });
            if (!project) {
                throw new AppError_1.AppError("ProjectId not found");
            }
            project.msgEdt = false;
            yield this.repositoryMessage.save(project);
            return project;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.repositoryMessage.findOneBy({
                id,
            });
            if (!message) {
                throw new AppError_1.AppError("Message not found");
            }
            yield this.repositoryMessage.delete({ id });
            server_1.io.to(message.projectId).emit("deletedMessage", { id: message.id });
            return "Message deleted successfully";
        });
    }
    getNewMessages(statusAttention) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectIdClients = yield this.repositoryMessage
                .createQueryBuilder("m")
                .select("m.projectId", "projectId")
                .addSelect("MAX(m.createdAt)", "latestCreatedAt")
                .groupBy("m.projectId");
            let statusChat = '';
            if (statusAttention != '') {
                statusChat = `c.statusAttention='${statusAttention}'`;
            }
            const result = yield this.repositoryMessage
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
        });
    }
    getMessagesRespondingToSupport(supportId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectIdClients = yield this.repositoryMessage
                .createQueryBuilder("m")
                .select("m.projectId", "projectId")
                .addSelect("MAX(m.createdAt)", "latestCreatedAt")
                .groupBy("m.projectId");
            const result = yield this.repositoryMessage
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
        });
    }
    getSearchProject(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectIdClients = yield this.repositoryMessage
                .createQueryBuilder("m")
                .select("m.projectId", "projectId")
                .addSelect("MAX(m.createdAt)", "latestCreatedAt")
                .groupBy("m.projectId");
            const result = yield this.repositoryMessage
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
        });
    }
    getSearchByWordOrPhrase(text, supportId) {
        return __awaiter(this, void 0, void 0, function* () {
            const word = text.split(" ");
            const resultSearch = yield this.repositoryMessage
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
        });
    }
    getSearchGenerationToSupport(text, supportId) {
        throw new Error("Method not implemented.");
    }
    uploadMedia(data) {
        return __awaiter(this, void 0, void 0, function* () {
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
            if (origin == "support") {
                server_1.io.to(projectId).emit('clientMessage', datatoSocket);
                server_1.io.to('support').emit('supportResponse', datatoSocket);
            }
            else {
                server_1.io.to('support').emit('supportMessage', datatoSocket);
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
        });
    }
}
exports.MessageRepository = MessageRepository;
