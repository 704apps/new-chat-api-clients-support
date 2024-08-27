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
exports.ChatRepository = void 0;
var app_data_source_1 = require("../../../../../main/infra/typeorm/connection/app-data-source");
var Chats_1 = require("../Entities/Chats");
var server_1 = require("../../../../../main/infra/http/server");
var AppError_1 = require("../../../../../error/AppError");
var ChatRepository = /** @class */ (function () {
    function ChatRepository() {
        this.repositoryChat = app_data_source_1.myDataSource.getRepository(Chats_1.Chats);
    }
    ChatRepository.prototype.getStatusAttention = function (id, supportId) {
        return __awaiter(this, void 0, void 0, function () {
            var chat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repositoryChat.findOneBy({
                            id: id
                        })];
                    case 1:
                        chat = _a.sent();
                        if (!chat) {
                            throw new AppError_1.AppError('Chat not found');
                        }
                        chat.statusAttention = "RESPONDING";
                        chat.supportId = supportId;
                        return [4 /*yield*/, this.repositoryChat.save(chat)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, chat];
                }
            });
        });
    };
    ChatRepository.prototype.updateStatusFinished = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var chat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repositoryChat.findOneBy({
                            id: id
                        })];
                    case 1:
                        chat = _a.sent();
                        if (!chat) {
                            throw new AppError_1.AppError('Chat not found');
                        }
                        chat.statusAttention = 'FINISHED';
                        return [4 /*yield*/, this.repositoryChat.save(chat)];
                    case 2:
                        _a.sent();
                        server_1.io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention });
                        return [2 /*return*/, chat];
                }
            });
        });
    };
    ChatRepository.prototype.updateStatusOpen = function (id, supportId) {
        return __awaiter(this, void 0, void 0, function () {
            var chat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repositoryChat.findOneBy({
                            id: id
                        })];
                    case 1:
                        chat = _a.sent();
                        if (!chat) {
                            throw new AppError_1.AppError('Chat not found');
                        }
                        chat.statusAttention = 'OPEN';
                        chat.supportId = supportId;
                        return [4 /*yield*/, this.repositoryChat.save(chat)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, server_1.io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, chat];
                }
            });
        });
    };
    ChatRepository.prototype.getCreateChat = function (infochat) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, supportId, projectId, statusAttention, chat, chatCreated;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, infochat];
                    case 1:
                        _a = _b.sent(), supportId = _a.supportId, projectId = _a.projectId, statusAttention = _a.statusAttention;
                        return [4 /*yield*/, this.repositoryChat.create({
                                supportId: supportId,
                                projectId: projectId,
                                statusAttention: statusAttention,
                                dateIndex: new Date()
                            })];
                    case 2:
                        chat = _b.sent();
                        return [4 /*yield*/, this.repositoryChat.save(chat)];
                    case 3:
                        chatCreated = _b.sent();
                        return [2 /*return*/, chatCreated];
                }
            });
        });
    };
    return ChatRepository;
}());
exports.ChatRepository = ChatRepository;
