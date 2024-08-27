"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetOneUserByEmailController = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _GetOneUserByEmailUseCase = require("./GetOneUserByEmailUseCase");
class GetOneUserByEmailController {
  async handle(request, response) {
    try {
      const {
        email
      } = request.query;
      if (!email) {
        return response.status(400).json({
          error: "Missing required fields"
        });
      }
      const getOneUserByEmailUseCase = await _tsyringe.container.resolve(_GetOneUserByEmailUseCase.GetOneUserByEmailUseCase);
      const user = await getOneUserByEmailUseCase.getOneUserByEmail(String(email));
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
exports.GetOneUserByEmailController = GetOneUserByEmailController;