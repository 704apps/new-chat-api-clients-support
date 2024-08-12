"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetCreateChatController = void 0;
var _GetCreateChatUseCase = require("./GetCreateChatUseCase");
var _tsyringe = require("tsyringe");
class GetCreateChatController {
  async handle(request, response) {
    try {
      const dataForChatCreation = request.body;
      const getCreateChatUseCase = await _tsyringe.container.resolve(_GetCreateChatUseCase.GetCreateChatUseCase);
      const chat = await getCreateChatUseCase.getCreateChat(dataForChatCreation);
      return response.status(200).json(chat);
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.GetCreateChatController = GetCreateChatController;