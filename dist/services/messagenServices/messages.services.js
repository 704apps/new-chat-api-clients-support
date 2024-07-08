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
const app_data_source_1 = require("../../infra/typeorm/connection/app-data-source");
const Messages_1 = require("../../infra/typeorm/Entities/Messages");
class MessageService {
    constructor() {
        this.messageRepository = app_data_source_1.myDataSource.getRepository(Messages_1.Messages);
    }
    getAllMessages() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.messageRepository.find();
        });
    }
    createMessage(userType, socketId, messageType, messages, orige) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(userType, socketId, messageType, messages, orige);
            const newMessage = this.messageRepository.create({ userType, socketId, messageType, messages, orige });
            return yield this.messageRepository.save(newMessage);
        });
    }
}
exports.MessageService = MessageService;
