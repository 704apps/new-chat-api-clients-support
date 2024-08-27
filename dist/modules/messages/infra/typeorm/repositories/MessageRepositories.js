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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRepository = void 0;
var typeorm_1 = require("typeorm");
var Messages_1 = require("../Entities/Messages");
var app_data_source_1 = require("../../../../../main/infra/typeorm/connection/app-data-source");
var Chats_1 = require("../../../../../modules/chats/infra/typeorm/Entities/Chats");
var Contacts_1 = require("../../../../../modules/contacts/infra/typeorm/Entities/Contacts");
var server_1 = require("../../../../../main/infra/http/server");
var AppError_1 = require("../../../../../error/AppError");
var aws_1 = require("../../../../../main/infra/upload/aws");
var OldMessages_1 = require("../Entities/OldMessages");
var MessageRepository = /** @class */ (function () {
    function MessageRepository() {
        this.repositoryMessage = app_data_source_1.myDataSource.getRepository(Messages_1.Messages);
        this.repositoryOldMessage = app_data_source_1.myDataSource.getRepository(OldMessages_1.OldMessages);
        this.repositoryChat = app_data_source_1.myDataSource.getRepository(Chats_1.Chats);
        this.repositoryContacts = app_data_source_1.myDataSource.getRepository(Contacts_1.Contacts);
    }
    MessageRepository.prototype.getIfInauguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repositoryMessage.find()];
                    case 1:
                        message = _a.sent();
                        return [2 /*return*/, message];
                }
            });
        });
    };
    MessageRepository.prototype.getOldMessages = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var message, oldMessages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repositoryOldMessage.find({
                            where: {
                                idMessage: { id: id },
                            },
                            order: {
                                createdAt: "DESC"
                            }
                        })];
                    case 1:
                        message = _a.sent();
                        if (message.length === 0) {
                            throw new AppError_1.AppError("Messages not found");
                        }
                        oldMessages = message.map(function (item) { return ({
                            supportId: item.supportId,
                            oldMessage: item.oldMessage,
                            createdAt: item.createdAt,
                        }); });
                        return [2 /*return*/, oldMessages];
                }
            });
        });
    };
    //Salva as mensagens enviada
    MessageRepository.prototype.createMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var messageType, messages, origin_1, projectId, supportId, userType, urlImage, nameProject, project, chat, chatId, newChat, chatSave, newMessage, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 19, , 20]);
                        messageType = message.messageType, messages = message.messages, origin_1 = message.origin, projectId = message.projectId, supportId = message.supportId, userType = message.userType, urlImage = message.urlImage;
                        return [4 /*yield*/, this.repositoryContacts.findOneBy({ projectId: projectId })];
                    case 1:
                        nameProject = _a.sent();
                        if (!!nameProject) return [3 /*break*/, 3];
                        project = this.repositoryContacts.create({ projectId: projectId });
                        return [4 /*yield*/, this.repositoryContacts.save(project)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.repositoryChat
                            .createQueryBuilder("chat")
                            .where("chat.projectId = :projectId", { projectId: projectId })
                            .andWhere("chat.statusAttention IN (:...status)", {
                            status: ["OPEN", "RESPONDING"],
                        })
                            .getOne()];
                    case 4:
                        chat = _a.sent();
                        chatId = chat === null || chat === void 0 ? void 0 : chat.id;
                        if (!!chat) return [3 /*break*/, 6];
                        newChat = this.repositoryChat.create({
                            supportId: supportId,
                            projectId: projectId,
                            statusAttention: "OPEN",
                            dateIndex: new Date(),
                        });
                        return [4 /*yield*/, this.repositoryChat.save(newChat)];
                    case 5:
                        chatSave = _a.sent();
                        chatId = chatSave.id;
                        return [3 /*break*/, 17];
                    case 6:
                        if (!(origin_1 === "support" && !chat.supportId)) return [3 /*break*/, 11];
                        // console.log('888');
                        chat.supportId = supportId;
                        chat.statusAttention = "RESPONDING";
                        return [4 /*yield*/, this.repositoryChat.save(chat)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, server_1.io.to("support").emit("statusChat", {
                                chatId: chat.id,
                                statusChat: chat.statusAttention,
                            })];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, server_1.io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention })];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.repositoryMessage
                                .createQueryBuilder()
                                .update(Messages_1.Messages)
                                .set({ supportId: supportId })
                                .where("chatId = :chatId", { chatId: chat.id })
                                .execute()];
                    case 10:
                        _a.sent();
                        return [3 /*break*/, 17];
                    case 11:
                        if (!(origin_1 === "support" && chat.supportId)) return [3 /*break*/, 17];
                        if (!(chat.supportId !== supportId)) return [3 /*break*/, 14];
                        chat.supportId = supportId;
                        return [4 /*yield*/, this.repositoryChat.save(chat)];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, server_1.io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention })];
                    case 13:
                        _a.sent();
                        _a.label = 14;
                    case 14:
                        if (!(chat.statusAttention === "OPEN")) return [3 /*break*/, 17];
                        chat.statusAttention = "RESPONDING";
                        return [4 /*yield*/, this.repositoryChat.save(chat)];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, server_1.io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention })];
                    case 16:
                        _a.sent();
                        _a.label = 17;
                    case 17:
                        newMessage = this.repositoryMessage.create({
                            messageType: messageType,
                            chatId: chatId,
                            messages: messages,
                            origin: origin_1,
                            msgEdt: false,
                            projectId: projectId,
                            supportId: supportId,
                            userType: userType,
                            urlImage: urlImage
                        });
                        return [4 /*yield*/, this.repositoryMessage.save(newMessage)];
                    case 18: return [2 /*return*/, _a.sent()];
                    case 19:
                        error_1 = _a.sent();
                        // console.log('131313131', error);
                        throw new AppError_1.AppError('error', 400, { error: error_1 });
                    case 20: return [2 /*return*/];
                }
            });
        });
    };
    MessageRepository.prototype.update = function (id, message) {
        return __awaiter(this, void 0, void 0, function () {
            var getMessage, oldMessage, supportId, idMessage, newOldMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repositoryMessage.findOneBy({
                            id: id,
                        })];
                    case 1:
                        getMessage = _a.sent();
                        if (!getMessage) {
                            throw new AppError_1.AppError("Message not found!");
                        }
                        oldMessage = getMessage.messages;
                        getMessage.messages = message;
                        getMessage.msgEdt = true;
                        supportId = getMessage.supportId;
                        return [4 /*yield*/, this.repositoryMessage.save(getMessage)];
                    case 2:
                        _a.sent();
                        idMessage = getMessage.id;
                        return [4 /*yield*/, this.repositoryOldMessage.create({
                                oldMessage: oldMessage,
                                idMessage: { id: idMessage },
                                supportId: supportId,
                            })];
                    case 3:
                        newOldMessage = _a.sent();
                        return [4 /*yield*/, this.repositoryOldMessage.save(newOldMessage)];
                    case 4:
                        _a.sent();
                        if (!(getMessage.origin === 'support')) return [3 /*break*/, 6];
                        //  console.log('veio aqui')
                        return [4 /*yield*/, server_1.io.to(getMessage.projectId).emit('supportMsgUpdate', { id: getMessage.id, updatedMessage: getMessage.messages })];
                    case 5:
                        //  console.log('veio aqui')
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, server_1.io.to("support").emit('supportMsgUpdate', { id: getMessage.id, updatedMessage: getMessage.messages })];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/, getMessage];
                }
            });
        });
    };
    MessageRepository.prototype.getFilterToStatusSidebar = function (statusAttention) {
        return __awaiter(this, void 0, void 0, function () {
            var selectIdClients, result, newMessagens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repositoryMessage
                            .createQueryBuilder("m")
                            .select("m.projectId", "projectId")
                            .addSelect("MAX(m.createdAt)", "latestCreatedAt")
                            .groupBy("m.projectId")];
                    case 1:
                        selectIdClients = _a.sent();
                        return [4 /*yield*/, this.repositoryMessage
                                .createQueryBuilder("m")
                                .innerJoin("(".concat(selectIdClients.getQuery(), ")"), "sub", "m.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt")
                                .leftJoin("chats", "c", "m.chatId = c.id")
                                .select([
                                "m.projectId",
                                "m.createdAt",
                                "m.messages",
                                "m.id",
                                "c.supportId",
                                "c.id as chatId",
                                "CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention",
                            ])
                                .where("c.statusAttention=:statusAttention", { statusAttention: statusAttention })
                                .orderBy("m.createdAt", "DESC")
                                .getRawMany()];
                    case 2:
                        result = _a.sent();
                        newMessagens = result.map(function (item) { return ({
                            id: item.m_id,
                            projectId: item.m_projectId,
                            supportId: item.c_supportId,
                            statusAttention: item.statusAttention,
                            messages: item.m_messages,
                            chatId: item.chatId,
                            createdAt: item.m_createdAt,
                        }); });
                        return [2 /*return*/, newMessagens];
                }
            });
        });
    };
    MessageRepository.prototype.upldateSA = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var project;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repositoryMessage.findOneBy({
                            id: id,
                        })];
                    case 1:
                        project = _a.sent();
                        if (!project) {
                            throw new AppError_1.AppError("ProjectId not found");
                        }
                        project.msgEdt = false;
                        return [4 /*yield*/, this.repositoryMessage.save(project)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, project];
                }
            });
        });
    };
    MessageRepository.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repositoryMessage.findOneBy({
                            id: id,
                        })];
                    case 1:
                        message = _a.sent();
                        if (!message) {
                            throw new AppError_1.AppError("Message not found");
                        }
                        return [4 /*yield*/, this.repositoryMessage.delete({ id: id })];
                    case 2:
                        _a.sent();
                        server_1.io.to(message.projectId).emit("deletedMessage", { id: message.id });
                        return [2 /*return*/, "Message deleted successfully"];
                }
            });
        });
    };
    MessageRepository.prototype.getOneMessage = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repositoryMessage.findOneBy({
                            id: id,
                        })];
                    case 1:
                        message = _a.sent();
                        if (!message) {
                            throw new AppError_1.AppError("Message not found");
                        }
                        return [2 /*return*/, message];
                }
            });
        });
    };
    MessageRepository.prototype.getNewMessages = function (statusAttention) {
        return __awaiter(this, void 0, void 0, function () {
            var selectIdClients, statusChat, result, newMessagens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repositoryMessage
                            .createQueryBuilder("m")
                            .select("m.projectId", "projectId")
                            .addSelect("MAX(m.createdAt)", "latestCreatedAt")
                            .groupBy("m.projectId")];
                    case 1:
                        selectIdClients = _a.sent();
                        statusChat = '';
                        if (statusAttention !== '') {
                            statusChat = "c.statusAttention='".concat(statusAttention, "'");
                        }
                        return [4 /*yield*/, this.repositoryMessage
                                .createQueryBuilder("m")
                                .innerJoin("(".concat(selectIdClients.getQuery(), ")"), "sub", "m.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt")
                                .leftJoin("chats", "c", "m.chatId = c.id")
                                .select([
                                "m.projectId",
                                "m.createdAt",
                                "m.messages",
                                "m.id",
                                "c.supportId",
                                "c.id as chatId",
                                "CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention",
                            ])
                                .where(statusChat)
                                .orderBy("m.createdAt", "DESC")
                                .getRawMany()];
                    case 2:
                        result = _a.sent();
                        newMessagens = result.map(function (item) { return ({
                            id: item.m_id,
                            projectId: item.m_projectId,
                            supportId: item.c_supportId,
                            statusAttention: item.statusAttention,
                            messages: item.m_messages,
                            chatId: item.chatId,
                            createdAt: item.m_createdAt,
                        }); });
                        return [2 /*return*/, newMessagens];
                }
            });
        });
    };
    MessageRepository.prototype.getMessagesRespondingToSupport = function (supportId) {
        return __awaiter(this, void 0, void 0, function () {
            var selectIdClients, result, newMessagens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repositoryMessage
                            .createQueryBuilder("m")
                            .select("m.projectId", "projectId")
                            .addSelect("MAX(m.createdAt)", "latestCreatedAt")
                            .groupBy("m.projectId")];
                    case 1:
                        selectIdClients = _a.sent();
                        return [4 /*yield*/, this.repositoryMessage
                                .createQueryBuilder("m")
                                .innerJoin("(".concat(selectIdClients.getQuery(), ")"), "sub", "m.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt")
                                .leftJoin("chats", "c", "m.chatId = c.id")
                                .select([
                                "m.projectId",
                                "m.createdAt",
                                "m.messages",
                                "m.id",
                                "c.supportId",
                                "c.id as chatId",
                                "CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention",
                            ])
                                .where("m.origin!='support'")
                                .andWhere("m.supportId=:supportId", { supportId: supportId })
                                .orderBy("m.createdAt", "DESC")
                                .getRawMany()];
                    case 2:
                        result = _a.sent();
                        newMessagens = result.map(function (item) { return ({
                            id: item.m_id,
                            projectId: item.m_projectId,
                            supportId: item.c_supportId,
                            statusAttention: item.statusAttention,
                            messages: item.m_messages,
                            chatId: item.chatId,
                            createdAt: item.m_createdAt,
                        }); });
                        return [2 /*return*/, newMessagens];
                }
            });
        });
    };
    MessageRepository.prototype.getSearchProject = function (projectId) {
        return __awaiter(this, void 0, void 0, function () {
            var selectIdClients, result, newMessagens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repositoryMessage
                            .createQueryBuilder("m")
                            .select("m.projectId", "projectId")
                            .addSelect("MAX(m.createdAt)", "latestCreatedAt")
                            .groupBy("m.projectId")];
                    case 1:
                        selectIdClients = _a.sent();
                        return [4 /*yield*/, this.repositoryMessage
                                .createQueryBuilder("m")
                                .innerJoin("(".concat(selectIdClients.getQuery(), ")"), "sub", "m.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt")
                                .leftJoin("chats", "c", "m.chatId = c.id")
                                .select([
                                "m.projectId",
                                "m.createdAt",
                                "m.messages",
                                "m.id",
                                "c.supportId",
                                "c.id as chatId",
                                "CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention",
                            ])
                                .where("m.projectId Like :projectId", { projectId: "%".concat(projectId, "%") })
                                .orderBy("m.createdAt", "DESC")
                                .getRawMany()];
                    case 2:
                        result = _a.sent();
                        newMessagens = result.map(function (item) { return ({
                            id: item.m_id,
                            projectId: item.m_projectId,
                            supportId: item.c_supportId,
                            statusAttention: item.statusAttention,
                            messages: item.m_messages,
                            chatId: item.chatId,
                            createdAt: item.m_createdAt,
                        }); });
                        return [2 /*return*/, newMessagens];
                }
            });
        });
    };
    MessageRepository.prototype.getSearchByWordOrPhrase = function (text, supportId) {
        return __awaiter(this, void 0, void 0, function () {
            var word, resultSearch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        word = text.split(" ");
                        return [4 /*yield*/, this.repositoryMessage
                                .createQueryBuilder("m")
                                .where("m.supportId=:supportId", { supportId: supportId })
                                .andWhere(new typeorm_1.Brackets(function (qb) {
                                qb.where("m.messages LIKE :text", { text: "%".concat(text, "%") });
                                word.forEach(function (word, index) {
                                    if (index === 0) {
                                        qb.orWhere("m.messages LIKE :word", { word: "%".concat(word, "%") });
                                    }
                                    else {
                                        qb.orWhere("m.messages LIKE :word", { word: "%".concat(word, "%") });
                                    }
                                });
                            }))
                                .orderBy("m.createdAt", "ASC")
                                .getMany()];
                    case 1:
                        resultSearch = _a.sent();
                        return [2 /*return*/, resultSearch];
                }
            });
        });
    };
    MessageRepository.prototype.getSearchGenerationToSupport = function (text, supportId) {
        return __awaiter(this, void 0, void 0, function () {
            var word, resultSearch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        word = text.split(" ");
                        return [4 /*yield*/, this.repositoryMessage
                                .createQueryBuilder("m")
                                .where("m.supportId = :supportId", { supportId: supportId })
                                .andWhere(new typeorm_1.Brackets(function (qb) {
                                qb.andWhere("CONCAT(m.projectId, ' ', m.messages) LIKE :text", {
                                    text: "%".concat(text, "%"),
                                });
                                word.forEach(function (word, index) {
                                    var _a;
                                    if (index === 0) {
                                        qb.orWhere("CONCAT(m.projectId, ' ' , m.messages) LIKE :word0", { word0: "%".concat(word, "%") });
                                    }
                                    else {
                                        qb.orWhere("CONCAT(m.projectId, ' ', m.messages) LIKE :word".concat(index), (_a = {}, _a["word".concat(index)] = "%".concat(word, "%"), _a));
                                    }
                                });
                            }))
                                .orderBy("m.createdAt", "ASC")
                                .getMany()];
                    case 1:
                        resultSearch = _a.sent();
                        return [2 /*return*/, resultSearch];
                }
            });
        });
    };
    MessageRepository.prototype.getOneMessagesClient = function (projectId, page, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var skip, project;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        skip = (page - 1) * pageSize;
                        return [4 /*yield*/, this.repositoryMessage
                                .createQueryBuilder('m')
                                // .where('m.supportId=:supportId', { supportId })
                                .where('m.projectId=:projectId', { projectId: projectId })
                                // .skip(skip)
                                // .take(pageSize)
                                .orderBy('m.createdAt', 'ASC')
                                .getMany()];
                    case 1:
                        project = _a.sent();
                        return [2 /*return*/, project];
                }
            });
        });
    };
    MessageRepository.prototype.uploadMedia = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var filename, filecontent, messages, key, userType, projectId, supportId, messageType, origin_2, urlImage, message, msg, datatoSocket, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        filename = data.filename, filecontent = data.filecontent, messages = data.messages, key = data.key, userType = data.userType, projectId = data.projectId, supportId = data.supportId, messageType = data.messageType, origin_2 = data.origin;
                        return [4 /*yield*/, (0, aws_1.uploadToAws)(filename, filecontent)];
                    case 1:
                        urlImage = _a.sent();
                        message = {
                            userType: userType,
                            projectId: projectId,
                            supportId: supportId,
                            messageType: messageType,
                            urlImage: urlImage,
                            messages: messages,
                            origin: origin_2,
                        };
                        return [4 /*yield*/, this.createMessage(message)];
                    case 2:
                        msg = _a.sent();
                        datatoSocket = {
                            id: msg.id,
                            chatId: msg.chatId,
                            key: key,
                            userType: userType,
                            projectId: projectId,
                            supportId: supportId,
                            messageType: messageType,
                            messages: messages,
                            urlImage: urlImage,
                            origin: origin_2,
                            createdAt: msg.createdAt
                        };
                        if (origin_2 === "support") {
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
                        return [2 /*return*/];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return MessageRepository;
}());
exports.MessageRepository = MessageRepository;
