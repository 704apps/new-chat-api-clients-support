"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetOneChatClientController = void 0;
var _GetOneChatClientUseCase = require("./GetOneChatClientUseCase");
var _tsyringe = require("tsyringe");
class GetOneChatClientController {
  async handle(request, response) {
    try {
      const chatId = request.params.id;
      const getOneChatClientUseCase = _tsyringe.container.resolve(_GetOneChatClientUseCase.GetOneChatClientUseCase);
      const message = await getOneChatClientUseCase.getOneMessagesClient(Number(chatId));
      return response.status(200).json(message);
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.GetOneChatClientController = GetOneChatClientController;