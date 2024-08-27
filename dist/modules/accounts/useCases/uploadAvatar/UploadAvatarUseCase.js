"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadAvatarUseCase = void 0;
var _AppError = require("../../../../error/AppError");
var _tsyringe = require("tsyringe");
var _IUsersRepository = require("../../../accounts/repositories/IUsersRepository");
var _dec, _dec2, _dec3, _dec4, _class;
let UploadAvatarUseCase = exports.UploadAvatarUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UserRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.IUserRepository === "undefined" ? Object : _IUsersRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UploadAvatarUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async uploadMedia(data) {
    try {
      const userAvatarUpdate = await this.userRepository.uploadMedia(data);
      return userAvatarUpdate;
    } catch (error) {
      throw new _AppError.AppError('An error occurred while updating!', 400, {
        error
      });
    }
  }
}) || _class) || _class) || _class) || _class);