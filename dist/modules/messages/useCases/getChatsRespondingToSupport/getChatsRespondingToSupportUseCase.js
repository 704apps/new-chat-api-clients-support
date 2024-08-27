"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetChatsRespondingToSupportUseCase = void 0;
var _AppError = require("../../../../error/AppError");
var _tsyringe = require("tsyringe");
var _IMessageRepositories = require("../../../../modules/messages/repositories/IMessageRepositories");
var _dec, _dec2, _dec3, _dec4, _class;
let GetChatsRespondingToSupportUseCase = exports.GetChatsRespondingToSupportUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("MessageRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IMessageRepositories.IMessageRepository === "undefined" ? Object : _IMessageRepositories.IMessageRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class GetChatsRespondingToSupportUseCase {
  constructor(messageRepository) {
    this.messageRepository = messageRepository;
  }
  async getChatsRespondingToSupport(supportId) {
    try {
      const newMessage = await this.messageRepository.getMessagesRespondingToSupport(supportId);
      return newMessage;
    } catch (error) {
      throw new _AppError.AppError('Unexpected error', 400, {
        error
      });
    }
  }
}) || _class) || _class) || _class) || _class);