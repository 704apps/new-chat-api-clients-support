"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateUserController = void 0;
var _tsyringe = require("tsyringe");
var _AutenticateUserUseCase = require("./AutenticateUserUseCase");
class AuthenticateUserController {
  async handle(request, response) {
    try {
      const {
        email,
        password
      } = request.body;
      const authenticateUseCase = _tsyringe.container.resolve(_AutenticateUserUseCase.AutenticateUserUseCase);
      const {
        token,
        refreshToken,
        user
      } = await authenticateUseCase.execute({
        password,
        email
      });
      return response.status(200).json({
        token,
        refreshToken,
        user
      });
    } catch (error) {
      return response.status(401).json({
        error
      });
    }
  }
}
exports.AuthenticateUserController = AuthenticateUserController;