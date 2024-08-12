"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetNewMessagesController = void 0;
var _GetNewMessagesUseCase = require("./GetNewMessagesUseCase");
var _tsyringe = require("tsyringe");
class GetNewMessagesController {
  async handle(request, response) {
    try {
      const {
        statusAttention
      } = request.query;
      const statusChat = statusAttention !== undefined ? statusAttention : '';
      const getNewMessagesUseCase = _tsyringe.container.resolve(_GetNewMessagesUseCase.GetNewMessagesUseCase);
      const messages = await getNewMessagesUseCase.getNewMessages(String(statusChat));
      return response.status(200).json(messages);
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.GetNewMessagesController = GetNewMessagesController;