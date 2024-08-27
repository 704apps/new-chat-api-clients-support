"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteUserUseCase = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _IUsersRepository = require("../../../../modules/accounts/repositories/IUsersRepository");
var _AppError = require("../../../../error/AppError");
var _dec, _dec2, _dec3, _dec4, _class;
let DeleteUserUseCase = exports.DeleteUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UserRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.IUserRepository === "undefined" ? Object : _IUsersRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async deleteUser(id) {
    const user = await this.userRepository.deleteUser(id);
    if (!user) {
      throw new _AppError.AppError('User not found', 400);
    }
    return user;
  }
}) || _class) || _class) || _class) || _class);