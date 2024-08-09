"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetOneMessagesClientController = void 0;
var _GetOneMessagesClientUseCase = require("./GetOneMessagesClientUseCase");
var _tsyringe = require("tsyringe");
class GetOneMessagesClientController {
  async handle(request, response) {
    try {
      const projectId = request.params.id;
      const page = parseInt(request.query.page, 10) || 1;
      const pageSize = 30;
      const getOneMessagesClientUseCase = _tsyringe.container.resolve(_GetOneMessagesClientUseCase.GetOneMessagesClientUseCase);
      const message = await getOneMessagesClientUseCase.getOneMessagesClient(String(projectId), page, pageSize);
      return response.status(200).json(message);
    } catch (error) {
      return response.status(400).json({
        message: 'Message not found '
      });
    }
  }
}
exports.GetOneMessagesClientController = GetOneMessagesClientController;