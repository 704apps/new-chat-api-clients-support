"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResetPasswordNoEmailUseCase = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _IUsersRepository = require("../../../../modules/accounts/repositories/IUsersRepository");
var _bcrypt = require("bcryptjs");
var _AppError = require("../../../../error/AppError");
var _dec, _dec2, _dec3, _dec4, _class;
let ResetPasswordNoEmailUseCase = exports.ResetPasswordNoEmailUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UserRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.IUserRepository === "undefined" ? Object : _IUsersRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ResetPasswordNoEmailUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async resetPassword(id, password) {
    try {
      const passwordHash = await (0, _bcrypt.hash)(password, 8);
      const passwordChange = await this.userRepository.resetPasswordNoEmail(id, passwordHash);
      if (!passwordChange) {
        throw new _AppError.AppError("User already exists");
      }
      return passwordChange;
    } catch (error) {
      //    console.log(error)
      throw new _AppError.AppError('Error creating user', 400, {
        error
      });
    }
  }
}) || _class) || _class) || _class) || _class);