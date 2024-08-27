"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditUserUseCase = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _IUsersRepository = require("../../../../modules/accounts/repositories/IUsersRepository");
var _AppError = require("../../../../error/AppError");
var _alterNameForSupporId = require("../../../../modules/accounts/util/alterNameForSupporId");
var _dec, _dec2, _dec3, _dec4, _class;
let EditUserUseCase = exports.EditUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UserRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.IUserRepository === "undefined" ? Object : _IUsersRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class EditUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(data) {
    try {
      const {
        id
      } = data;
      // filename:string;
      // filecontent:Buffer;
      // console.log('veio no antes de ver email'+passwordHash)

      const isuseralreadyExist = await this.userRepository.findById(id);

      //  console.log('veio no depois de ver email')

      if (!isuseralreadyExist) {
        throw new _AppError.AppError("User already exists");
      }
      const user = await this.userRepository.edit(data);
      const userUpdate = {
        id: user.id,
        name: user.name,
        supportId: await (0, _alterNameForSupporId.alterNameForSupporId)(user.name),
        email: user.email,
        avatar: user.avatar,
        active: user.active,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      };
      return userUpdate;
    } catch (error) {
      console.log(error);
      throw new _AppError.AppError('Error creating user', 400, {
        error
      });
    }
  }
}) || _class) || _class) || _class) || _class);