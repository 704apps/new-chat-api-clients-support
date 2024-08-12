"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateStatusOpenController = void 0;
var _UpdateStatusOpenUseCase = require("./UpdateStatusOpenUseCase");
var _tsyringe = require("tsyringe");
class UpdateStatusOpenController {
  async handle(request, response) {
    try {
      const idChat = request.params.id;
      const {
        supportId
      } = request.query;
      const updateStatusOpenUseCase = await _tsyringe.container.resolve(_UpdateStatusOpenUseCase.UpdateStatusOpenUseCase);
      await updateStatusOpenUseCase.updateStatusOpen(idChat, String(supportId));
      return response.status(200).json(updateStatusOpenUseCase);
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.UpdateStatusOpenController = UpdateStatusOpenController;