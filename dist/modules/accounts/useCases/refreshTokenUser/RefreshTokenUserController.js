"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshTokenUserController = void 0;
var _RefreshTokenUserUseCase = require("./RefreshTokenUserUseCase");
var _tsyringe = require("tsyringe");
class RefreshTokenUserController {
  async handle(request, response) {
    const {
      refresh_token
    } = request.body;
    const refreshTokenUserUseCase = _tsyringe.container.resolve(_RefreshTokenUserUseCase.RefreshTokenUserUseCase);
    const token = await refreshTokenUserUseCase.execute(refresh_token);
    return response.status(200).json(token);
  }
}
exports.RefreshTokenUserController = RefreshTokenUserController;