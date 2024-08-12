"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateStatusFinishedController = void 0;
var _UpdateStatusFinishedUseCase = require("./UpdateStatusFinishedUseCase");
var _tsyringe = require("tsyringe");
class UpdateStatusFinishedController {
  async handle(request, response) {
    try {
      const idChat = request.params.id;
      const updateStatusFinishedUseCase = await _tsyringe.container.resolve(_UpdateStatusFinishedUseCase.UpdateStatusFinishedUseCase);
      await updateStatusFinishedUseCase.updateStatusFinished(idChat);
      return response.status(200).json(updateStatusFinishedUseCase);
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.UpdateStatusFinishedController = UpdateStatusFinishedController;