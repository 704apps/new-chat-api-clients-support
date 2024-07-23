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
const app_data_source_1 = require("main/infra/typeorm/connection/app-data-source");
const Messages_1 = require("@modules/messages/infra/typeorm/Entities/Messages");
class MessageService {
    constructor() {
        this.messageRepository = app_data_source_1.myDataSource.getRepository(Messages_1.Messages);
        //Verifica se a conexão estabelicida antes de obter acesso a entidade. 
        if (!app_data_source_1.myDataSource.isInitialized) {
            app_data_source_1.myDataSource.initialize().then(() => {
                this.messageRepository = app_data_source_1.myDataSource.getRepository(Messages_1.Messages);
            }).catch(error => console.error("Error ao incializar a conexão:", error));
        }
    }
    getOneMessagesClient(chatId) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield this.messageRepository.findBy({
                chatId
            });
            return project;
        });
    }
}
exports.MessageService = MessageService;
