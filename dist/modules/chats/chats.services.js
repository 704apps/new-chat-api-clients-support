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
exports.ChatService = void 0;
const app_data_source_1 = require("../../main/infra/typeorm/connection/app-data-source");
const Chats_1 = require("./infra/typeorm/Entities/Chats");
const server_1 = require("../../main/infra/http/server");
class ChatService {
    constructor() {
        this.chatsRepository = app_data_source_1.myDataSource.getRepository(Chats_1.Chats);
        //Verifica se a conexão estabelicida antes de obter acesso a entidade. 
        if (!app_data_source_1.myDataSource.isInitialized) {
            app_data_source_1.myDataSource.initialize().then(() => {
                this.chatsRepository = app_data_source_1.myDataSource.getRepository(Chats_1.Chats);
            }).catch(error => console.error("Error ao incializar a conexão:", error));
        }
    }
    getStatusAttention(id, supportId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chat = yield this.chatsRepository.findOneBy({
                    id
                });
                if (chat) {
                    chat.statusAttention = "RESPONDING";
                    chat.supportId = supportId;
                    yield this.chatsRepository.save(chat);
                    return chat;
                }
            }
            catch (error) {
                return { message: "Chat not found" };
            }
        });
    }
    updateStatusFinished(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chat = yield this.chatsRepository.findOneBy({
                    id
                });
                if (chat) {
                    chat.statusAttention = 'FINISHED';
                    yield this.chatsRepository.save(chat);
                    yield server_1.io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention });
                }
                return chat;
            }
            catch (error) {
                return { error };
            }
        });
    }
    updateStatusOpen(id, supportId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chat = yield this.chatsRepository.findOneBy({
                    id
                });
                if (chat) {
                    chat.statusAttention = 'OPEN';
                    chat.supportId = supportId;
                    yield this.chatsRepository.save(chat);
                    yield server_1.io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention });
                }
                return chat;
            }
            catch (error) {
                return { error };
            }
        });
    }
    getCreateChat(infochat) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { supportId, projectId, statusAttention } = yield infochat;
                const chat = yield this.chatsRepository.create({
                    supportId,
                    projectId,
                    statusAttention,
                    dateIndex: new Date()
                });
                if (chat) {
                    yield this.chatsRepository.save(chat);
                }
                else {
                    return { message: "Chat not creation" };
                }
                return chat;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.ChatService = ChatService;
