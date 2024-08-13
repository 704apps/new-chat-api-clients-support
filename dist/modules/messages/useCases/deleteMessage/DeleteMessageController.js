"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteMessageController = void 0;
var _DeleteMessageUseCase = require("./DeleteMessageUseCase");
var _tsyringe = require("tsyringe");
class DeleteMessageController {
  async handle(request, response) {
    try {
      const idMessage = request.params.id;
      const deleteMessageUseCase = await _tsyringe.container.resolve(_DeleteMessageUseCase.DeleteMessageUseCase);
      await deleteMessageUseCase.delete(idMessage);
      return response.status(200).json('Message deleted successfully');
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.DeleteMessageController = DeleteMessageController;