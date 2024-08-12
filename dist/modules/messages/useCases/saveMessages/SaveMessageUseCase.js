"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaveMessageUseCase = void 0;
var _IMessageRepositories = require("../../../../modules/messages/repositories/IMessageRepositories");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let SaveMessageUseCase = exports.SaveMessageUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("MessageRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IMessageRepositories.IMessageRepository === "undefined" ? Object : _IMessageRepositories.IMessageRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class SaveMessageUseCase {
  constructor(messageRepository) {
    this.messageRepository = messageRepository;
    this.next = void 0;
  }
  async createMessage(message) {
    try {
      console.log('===================');
      const project = await this.messageRepository.createMessage(message);
      console.log(project);
      console.log('MMMMMMMMMMMMMMMMMMM');
      return project;
    } catch (error) {
      this.next(error);
      //  throw new AppError('Error when saving message!', 400, { error })
    }
  }
}) || _class) || _class) || _class) || _class);