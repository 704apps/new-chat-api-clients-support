"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatRepository = void 0;
var _appDataSource = require("../../../../../main/infra/typeorm/connection/app-data-source");
var _Chats = require("../Entities/Chats");
var _server = require("../../../../../main/infra/http/server");
var _AppError = require("../../../../../error/AppError");
class ChatRepository {
  constructor() {
    this.repositoryChat = void 0;
    this.repositoryChat = _appDataSource.myDataSource.getRepository(_Chats.Chats);
  }
  async getStatusAttention(id, supportId) {
    const chat = await this.repositoryChat.findOneBy({
      id
    });
    if (!chat) {
      throw new _AppError.AppError('Chat not found');
    }
    chat.statusAttention = "RESPONDING";
    chat.supportId = supportId;
    await this.repositoryChat.save(chat);
    return chat;
  }
  async updateStatusFinished(id) {
    const chat = await this.repositoryChat.findOneBy({
      id
    });
    if (!chat) {
      throw new _AppError.AppError('Chat not found');
    }
    chat.statusAttention = 'FINISHED';
    await this.repositoryChat.save(chat);
    _server.io.to('support').emit('statusChat', {
      chatId: chat.id,
      statusChat: chat.statusAttention
    });
    return chat;
  }
  async updateStatusOpen(id, supportId) {
    const chat = await this.repositoryChat.findOneBy({
      id
    });
    if (!chat) {
      throw new _AppError.AppError('Chat not found');
    }
    chat.statusAttention = 'OPEN';
    chat.supportId = supportId;
    await this.repositoryChat.save(chat);
    await _server.io.to('support').emit('statusChat', {
      chatId: chat.id,
      statusChat: chat.statusAttention
    });
    return chat;
  }
  async getCreateChat(infochat) {
    const {
      supportId,
      projectId,
      statusAttention
    } = await infochat;
    const chat = await this.repositoryChat.create({
      supportId,
      projectId,
      statusAttention,
      dateIndex: new Date()
    });
    const chatCreated = await this.repositoryChat.save(chat);
    return chatCreated;
  }
}
exports.ChatRepository = ChatRepository;