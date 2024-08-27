"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetOldMessagesController = void 0;
var _GetOldMessagesUseCase = require("./GetOldMessagesUseCase");
var _tsyringe = require("tsyringe");
class GetOldMessagesController {
  async handle(request, response) {
    try {
      const idMessage = request.params.id;
      const getOldMessagesUseCase = _tsyringe.container.resolve(_GetOldMessagesUseCase.GetOldMessagesUseCase);
      const messages = await getOldMessagesUseCase.getOldMessages(idMessage);
      return response.status(200).json(messages);
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.GetOldMessagesController = GetOldMessagesController;