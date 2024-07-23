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
const messages_services_1 = require("./messages.services");
const statusfunction_1 = require("../util/statusfunction");
const messageService = new messages_services_1.MessageService();
const server_1 = require("../../main/infra/http/server");
class MessageController {
    getMessages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { statusAttention } = req.query;
                statusAttention ? statusAttention : '';
                const messages = yield messageService.getNewMessages(String(statusAttention));
                res.status(200).json(messages);
            }
            catch (error) {
                res.status(400).json({ message: 'Messages not found ' });
            }
        });
    }
    getChatsRespondingToSupport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const supportId = req.params.id;
                console.log(supportId);
                const messages = yield messageService.getChatsRespondingToSupport(supportId);
                res.status(200).json(messages);
            }
            catch (error) {
                res.status(400).json({ message: 'Messages not found ' });
            }
        });
    }
    getOneMessagesClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projectId = req.params.id;
                const page = parseInt(req.query.page, 10) || 1;
                //const supportId = req.query.supportId 
                const pageSize = 30;
                const message = yield messageService.getOneMessagesClient(String(projectId), page, pageSize);
                res.status(200).json(message);
            }
            catch (error) {
                res.status(400).json({ message: 'Message not found ' });
            }
        });
    }
    getOneMessage(msgId) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = new statusfunction_1.MockResponse();
            try {
                const message = yield messageService.getOneMessage(msgId);
                return message;
            }
            catch (error) {
                res.status(400).json({ message: 'Message not found ' });
            }
        });
    }
    getUpdateMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projectId = parseInt(req.params.id);
                const { messages } = req.body;
                const updateMessage = yield messageService.getUpdateMessage(projectId, messages);
                if (updateMessage.origin === 'support') {
                    console.log('veio aqui');
                    yield server_1.io.to(updateMessage.projectId).emit('supportMsgUpdate', { id: updateMessage.id, updatedMessage: updateMessage.messages });
                }
                else {
                    yield server_1.io.to(updateMessage.supportId).emit('supportMsgUpdate', { id: updateMessage.id, updatedMessage: updateMessage.messages });
                }
                res.status(200).json(updateMessage);
            }
            catch (error) {
                res.status(400).json({ message: 'Message not found ' });
            }
        });
    }
    getUpdateSocketAction(msgId) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = new statusfunction_1.MockResponse();
            try {
                yield messageService.getUpdateSocketAction(msgId);
                res.status(200).json({ update: 'ok' });
            }
            catch (error) {
                res.status(400).json({ error });
            }
        });
    }
    getDeleteMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projectId = parseInt(req.params.id);
                const updateMessage = yield messageService.getDeleteMessage(projectId);
                res.status(200).json(updateMessage);
            }
            catch (error) {
                res.status(400).json({ message: 'Message not found ' });
            }
        });
    }
    getFilterToStatusSidebar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { statusAttention } = req.query;
                const updateMessage = yield messageService.getFilterToStatusSidebar(String(statusAttention));
                res.status(200).json(updateMessage);
            }
            catch (error) {
                res.status(400).json({ message: 'Message not found ' });
            }
        });
    }
    getSearchProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { project } = req.query;
                console.log(project);
                const updateMessage = yield messageService.getSearchProject(String(project));
                res.status(200).json(updateMessage);
            }
            catch (error) {
                res.status(400).json({ message: 'Message not found ' });
            }
        });
    }
    getSearchByWordOrPhrase(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { word_phrase, supportId } = req.query;
                console.log(word_phrase, supportId);
                const updateMessage = yield messageService.getSearchByWordOrPhrase(word_phrase, supportId);
                res.status(200).json(updateMessage);
            }
            catch (error) {
                res.status(400).json({ message: 'Message not found ' });
            }
        });
    }
    getSearchGenerationToSupport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { general, supportId } = req.query;
                console.log(general, supportId);
                const updateMessage = yield messageService.getSearchGenerationToSupport(general, supportId);
                res.status(200).json(updateMessage);
            }
            catch (error) {
                res.status(400).json({ message: 'Message not found ' });
            }
        });
    }
    getSearchGenerationToAdmin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { word_phrase, supportId } = req.query;
                const updateMessage = yield messageService.getSearchGenerationToAdmin(word_phrase, supportId);
                res.status(200).json(updateMessage);
            }
            catch (error) {
                res.status(400).json({ message: 'Message not found ' });
            }
        });
    }
    uploadFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const file = yield req.file;
                const dataBody = yield req.body;
                if (file) {
                    dataBody.filecontent = file.buffer;
                    dataBody.filename = file.originalname;
                    yield messageService.uploadMedia(dataBody);
                }
                res.status(200).json('Ok');
            }
            catch (error) {
                res.status(400).json({ error: error });
            }
        });
    }
    saveMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newMessage = yield messageService.createMessage(message);
                return newMessage;
            }
            catch (error) {
                const errorMessage = { message: `Error ${error}` };
                return errorMessage;
            }
        });
    }
}
exports.MessageController = MessageController;
