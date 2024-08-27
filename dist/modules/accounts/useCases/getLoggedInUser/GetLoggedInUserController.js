"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetLoggedInUserController = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _GetLoggedInUserUseCase = require("./GetLoggedInUserUseCase");
class GetLoggedInUserController {
  async handle(request, response) {
    try {
      const userId = response.locals.userId;
      if (!userId) {
        return response.status(400).json({
          error: "Missing required fields"
        });
      }
      const getLoggedInUserUseCase = await _tsyringe.container.resolve(_GetLoggedInUserUseCase.GetLoggedInUserUseCase);
      const user = await getLoggedInUserUseCase.getOneUserById(String(userId));
      //  console.log(user)
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
exports.GetLoggedInUserController = GetLoggedInUserController;