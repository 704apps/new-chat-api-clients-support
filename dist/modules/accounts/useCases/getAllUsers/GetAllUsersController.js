"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllUsersController = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _GetAllUsersUseCase = require("./GetAllUsersUseCase");
class GetAllUsersController {
  async handle(request, response) {
    try {
      const getAllUsersUseCase = await _tsyringe.container.resolve(_GetAllUsersUseCase.GetAllUsersUseCase);
      const users = await getAllUsersUseCase.getAllUser();
      return response.status(200).json(users);
    } catch (error) {
      // console.log(error)
      return response.status(400).json({
        error
      });
    }
  }
}
exports.GetAllUsersController = GetAllUsersController;