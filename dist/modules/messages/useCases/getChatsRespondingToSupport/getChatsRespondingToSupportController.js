"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetChatsRespondingToSupportController = void 0;
var _getChatsRespondingToSupportUseCase = require("./getChatsRespondingToSupportUseCase");
var _tsyringe = require("tsyringe");
class GetChatsRespondingToSupportController {
  async handle(request, response) {
    try {
      const {
        supportId
      } = request.query;
      const getChatsRespondingToSupportUseCase = _tsyringe.container.resolve(_getChatsRespondingToSupportUseCase.GetChatsRespondingToSupportUseCase);
      const messages = await getChatsRespondingToSupportUseCase.getChatsRespondingToSupport(String(supportId));
      return response.status(200).json(messages);
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.GetChatsRespondingToSupportController = GetChatsRespondingToSupportController;