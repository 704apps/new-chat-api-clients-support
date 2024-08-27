"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetOneUserController = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _GetOneUserUseCase = require("./GetOneUserUseCase");
class GetOneUserController {
  async handle(request, response) {
    try {
      const userId = request.params.id;
      if (!userId) {
        return response.status(400).json({
          error: "Missing required fields"
        });
      }
      const GetOneUseCase = await _tsyringe.container.resolve(_GetOneUserUseCase.GetOneUserUseCase);
      const user = await GetOneUseCase.getOneUser(userId);
      return response.status(200).json({
        user
      });
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.GetOneUserController = GetOneUserController;