"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateMessageController = void 0;
var _UpdateMessageUseCase = require("./UpdateMessageUseCase");
var _tsyringe = require("tsyringe");
var _AppError = require("../../../../error/AppError");
class UpdateMessageController {
  async handle(request, response) {
    try {
      const id = request.params.id;
      const {
        messages
      } = request.body;
      if (!messages) {
        throw new _AppError.AppError('incorrect parameter');
      }
      const updateMessageUseCase = await _tsyringe.container.resolve(_UpdateMessageUseCase.UpdateMessageUseCase);
      const messageUpdade = await updateMessageUseCase.updateMessage(id, messages);
      return response.status(200).json(messageUpdade);
    } catch (error) {
      //    console.log(error)
      return response.status(400).json({
        error
      });
    }
  }
}
exports.UpdateMessageController = UpdateMessageController;