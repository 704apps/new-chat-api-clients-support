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
exports.MessageController = void 0;
const GetOneChatClientUseCase_1 = require("./GetOneChatClientUseCase");
const messageService = new GetOneChatClientUseCase_1.MessageService();
class MessageController {
    getOneMessagesClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chatId = req.params.id;
                const message = yield messageService.getOneMessagesClient(Number(chatId));
                res.status(200).json(message);
            }
            catch (error) {
                res.status(400).json({ message: 'Message not found ' });
            }
        });
    }
}
exports.MessageController = MessageController;
