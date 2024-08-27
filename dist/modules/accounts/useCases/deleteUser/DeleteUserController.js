"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteUserController = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _DeleteUserUseCase = require("./DeleteUserUseCase");
class DeleteUserController {
  async handle(request, response) {
    try {
      const userId = request.params.id;
      if (!userId) {
        return response.status(400).json({
          error: "Missing required fields"
        });
      }
      const deleteUserUseCase = await _tsyringe.container.resolve(_DeleteUserUseCase.DeleteUserUseCase);
      const user = await deleteUserUseCase.deleteUser(userId);
      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}
exports.DeleteUserController = DeleteUserController;