"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserUseCase = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _IUsersRepository = require("../../../../modules/accounts/repositories/IUsersRepository");
var _bcrypt = require("bcryptjs");
var _AppError = require("../../../../error/AppError");
var _alterNameForSupporId = require("../../util/alterNameForSupporId");
var _dec, _dec2, _dec3, _dec4, _class;
let CreateUserUseCase = exports.CreateUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UserRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.IUserRepository === "undefined" ? Object : _IUsersRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute({
    name,
    email,
    password,
    role
  }) {
    try {
      const passwordHash = await (0, _bcrypt.hash)(password, 8);
      // console.log('veio no antes de ver email'+passwordHash)

      const isuseralreadyExist = await this.userRepository.findByEmail(email);

      //  console.log('veio no depois de ver email')

      if (isuseralreadyExist) {
        throw new _AppError.AppError("User already exists");
      }

      // console.log('veio no antes de salvar')

      const user = await this.userRepository.create({
        name,
        email,
        password: passwordHash,
        role
      });
      const supportId = (0, _alterNameForSupporId.alterNameForSupporId)(user.name);
      const userCreated = {
        id: user.id,
        name: user.name,
        supportId,
        email: user.email,
        avatar: user.avatar,
        active: user.active,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      };
      return userCreated;
    } catch (error) {
      console.log(error);
      throw new _AppError.AppError('Error creating user', 400, {
        error
      });
    }
  }
}) || _class) || _class) || _class) || _class);