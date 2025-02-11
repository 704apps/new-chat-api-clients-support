"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaveMessageController = void 0;
var _SaveMessageUseCase = require("./SaveMessageUseCase");
var _tsyringe = require("tsyringe");
class SaveMessageController {
  constructor() {
    this.next = void 0;
  }
  async saveMessage(message) {
    try {
      const saveMessageUseCase = _tsyringe.container.resolve(_SaveMessageUseCase.SaveMessageUseCase);
      const newMessage = saveMessageUseCase.createMessage(message);
      return newMessage;
    } catch (error) {
      console.log('erro 2: ' + error);
      this.next(error);
    }
  }
}
exports.SaveMessageController = SaveMessageController;