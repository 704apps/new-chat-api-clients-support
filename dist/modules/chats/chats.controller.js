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
exports.ChatController = void 0;
const chats_services_1 = require("./chats.services");
const chatService = new chats_services_1.ChatService();
class ChatController {
    getUpdateStatusAttention(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chatId = Number(req.params.id);
                const { supportId } = req.body;
                const chat = yield chatService.getStatusAttention(chatId, supportId);
                res.status(200).json(chat);
            }
            catch (error) {
                res.status(400).json({ error });
            }
        });
    }
    updateStatusFinished(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chatId = Number(req.params.id);
                const chat = yield chatService.updateStatusFinished(chatId);
                res.status(200).json(chat);
            }
            catch (error) {
                res.status(400).json({ error });
            }
        });
    }
    updateStatusOpen(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chatId = Number(req.params.id);
                const { supportId } = (req.query);
                const chat = yield chatService.updateStatusOpen(chatId, String(supportId));
                res.status(200).json(chat);
            }
            catch (error) {
                res.status(400).json({ error });
            }
        });
    }
    getCreateChat(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const chat = yield chatService.getCreateChat(data);
                res.status(200).json(chat);
            }
            catch (error) {
                res.status(400).json({ error });
            }
        });
    }
}
exports.ChatController = ChatController;
