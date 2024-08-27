"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUserToSubMasterController = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _UpdateUserToSubMasterUseCase = require("./UpdateUserToSubMasterUseCase");
class UpdateUserToSubMasterController {
  async handle(request, response) {
    try {
      const userId = request.params.id;
      const {
        role
      } = request.body;
      if (!userId || !role) {
        return response.status(400).json({
          error: "Missing required fields"
        });
      }
      const updateUserToSubMasterUseCase = await _tsyringe.container.resolve(_UpdateUserToSubMasterUseCase.UpdateUserToSubMasterUseCase);
      const user = await updateUserToSubMasterUseCase.updateUserToSubMaster(userId, role);
      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}
exports.UpdateUserToSubMasterController = UpdateUserToSubMasterController;