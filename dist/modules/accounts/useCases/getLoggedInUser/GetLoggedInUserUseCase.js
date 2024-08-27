"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetLoggedInUserUseCase = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _IUsersRepository = require("../../../../modules/accounts/repositories/IUsersRepository");
var _AppError = require("../../../../error/AppError");
var _alterNameForSupporId = require("../../../accounts/util/alterNameForSupporId");
var _dec, _dec2, _dec3, _dec4, _class;
let GetLoggedInUserUseCase = exports.GetLoggedInUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UserRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.IUserRepository === "undefined" ? Object : _IUsersRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class GetLoggedInUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async getOneUserById(userId) {
    try {
      const user = await this.userRepository.findById(userId);
      const userData = {
        id: user?.id,
        name: user?.name,
        email: user?.email,
        supportId: (0, _alterNameForSupporId.alterNameForSupporId)(user.name),
        role: user.role,
        active: user.active,
        avatar: user.avatar,
        createdAt: user?.createdAt,
        updatedAt: user?.updatedAt
      };
      return userData;
    } catch (error) {
      throw new _AppError.AppError('User not found', 400, {
        error
      });
    }
  }
}) || _class) || _class) || _class) || _class);