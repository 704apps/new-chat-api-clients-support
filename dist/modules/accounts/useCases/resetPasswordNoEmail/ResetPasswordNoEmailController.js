"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResetPasswordNoEmailController = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _ResetPasswordNoEmailUseCase = require("./ResetPasswordNoEmailUseCase");
class ResetPasswordNoEmailController {
  async handle(request, response) {
    try {
      const id = request.params.id;
      const {
        password
      } = request.body;
      // console.log(id)

      if (!password) {
        return response.status(400).json({
          error: "Missing required fields"
        });
      }
      const resetPasswordNoEmailUseCase = await _tsyringe.container.resolve(_ResetPasswordNoEmailUseCase.ResetPasswordNoEmailUseCase);
      const resChanged = await resetPasswordNoEmailUseCase.resetPassword(id, password);
      return response.status(200).json(resChanged);
    } catch (error) {
      //  console.log(error)
      return response.status(400).json({
        error
      });
    }
  }
}
exports.ResetPasswordNoEmailController = ResetPasswordNoEmailController;