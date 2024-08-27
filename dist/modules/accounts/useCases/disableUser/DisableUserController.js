"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisableUserController = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _DisableUserUseCase = require("./DisableUserUseCase");
class DisableUserController {
  async handle(request, response) {
    try {
      const userId = request.params.id;
      const {
        action
      } = request.body;
      if (!userId) {
        return response.status(400).json({
          error: "Missing required fields"
        });
      }
      const disableUserUseCase = await _tsyringe.container.resolve(_DisableUserUseCase.DisableUserUseCase);
      const user = await disableUserUseCase.disableUser(userId, action);
      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}
exports.DisableUserController = DisableUserController;