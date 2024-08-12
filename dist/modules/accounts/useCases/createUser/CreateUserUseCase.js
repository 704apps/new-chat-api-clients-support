"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserUseCase = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _IUsersRepository = require("../../../../modules/accounts/repositories/IUsersRepository");
var _bcrypt = require("bcrypt");
var _AppError = require("../../../../error/AppError");
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
    password
  }) {
    try {
      console.log('a senha é ' + password);
      const passwordHash = await (0, _bcrypt.hash)(password, 8);
      console.log('veio no antes de ver email' + passwordHash);
      const isuseralreadyExist = await this.userRepository.findByEmail(email);
      console.log('veio no depois de ver email');
      if (isuseralreadyExist) {
        throw new _AppError.AppError("User already exists");
      }
      console.log('veio no antes de salvar');
      const user = await this.userRepository.create({
        name,
        email,
        password: passwordHash
      });
      const userCreated = {
        id: user.id,
        name: user.name,
        email: user.email
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