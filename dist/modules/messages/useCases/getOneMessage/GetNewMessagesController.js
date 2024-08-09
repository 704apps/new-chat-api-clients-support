"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetOneMessagesClientController = void 0;
var _GetOneMessagesUseCase = require("./GetOneMessagesUseCase");
var _tsyringe = require("tsyringe");
class GetOneMessagesClientController {
  async handle(request, response) {
    try {
      const idMessage = request.params.id;
      const getNewMessagesClientUseCase = _tsyringe.container.resolve(_GetOneMessagesUseCase.GetOneMessagesClientUseCase);
      const messages = await getNewMessagesClientUseCase.getOneMessage(idMessage);
      return response.status(200).json(messages);
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.GetOneMessagesClientController = GetOneMessagesClientController;