"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetCreateChatUseCase = void 0;
var _IChatRepositories = require("../../../../modules/chats/repositories/IChatRepositories");
var _AppError = require("../../../../error/AppError");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let GetCreateChatUseCase = exports.GetCreateChatUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ChatRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IChatRepositories.IChatRepository === "undefined" ? Object : _IChatRepositories.IChatRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class GetCreateChatUseCase {
  constructor(chatRepository) {
    this.chatRepository = chatRepository;
  }
  async getCreateChat(infochat) {
    try {
      const chatUpdadeStatusOpen = await this.chatRepository.getCreateChat(infochat);
      return chatUpdadeStatusOpen;
    } catch (error) {
      throw new _AppError.AppError('Error when update chat!', 400, {
        error
      });
    }
  }
}) || _class) || _class) || _class) || _class);