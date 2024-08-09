"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutenticateUserUseCase = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _IUsersRepository = require("../../../../modules/accounts/repositories/IUsersRepository");
var _jsonwebtoken = require("jsonwebtoken");
var _bcrypt = require("bcrypt");
var _AppError = require("../../../../error/AppError");
var _GenerateRefreshToken = require("../../../../modules/refreshToken/useCases/genereRefreshToken/GenerateRefreshToken");
var _DeleteRefreshToken = require("../../../../modules/refreshToken/useCases/deteteRefreshToken/DeleteRefreshToken");
var _dec, _dec2, _dec3, _dec4, _class;
let AutenticateUserUseCase = exports.AutenticateUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UserRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.IUserRepository === "undefined" ? Object : _IUsersRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class AutenticateUserUseCase {
  constructor(userRespository) {
    this.userRespository = userRespository;
  }
  async execute({
    email,
    password
  }) {
    const userVerify = await this.userRespository.findByEmail(email);
    if (!userVerify) {
      throw new _AppError.AppError("Email or password incorrect!");
    }
    console.log('veio aqui 1');
    const passwordMath = await (0, _bcrypt.compare)(password, userVerify.password);
    if (!passwordMath) {
      console.log('veio aqui 2');
      throw new _AppError.AppError("Email or password incorrect!");
    }
    ;
    const secretKey = String(process.env.SECRET_JWT);
    const token = (0, _jsonwebtoken.sign)({}, secretKey, {
      subject: `${userVerify.id}`,
      // Define o subject (assunto) do token
      expiresIn: '20s' // Define o tempo de expiração do token para 1 hora
    });
    const generateRefleshToken = _tsyringe.container.resolve(_GenerateRefreshToken.GenerateRefreshToken);
    const deleteRefleshToken = _tsyringe.container.resolve(_DeleteRefreshToken.DeleteRefreshToken);
    await deleteRefleshToken.deleteMany(userVerify.id);
    const returrefreshToken = await generateRefleshToken.execute(userVerify.id);
    const refreshToken = {
      id: returrefreshToken?.id,
      expiriesIn: returrefreshToken?.expiriesIn
    };
    const user = {
      userid: returrefreshToken?.userId.id,
      userName: returrefreshToken?.userId.name,
      supportId: returrefreshToken?.userId.name,
      email: returrefreshToken?.userId.email,
      createdAt: returrefreshToken?.userId.createdAt,
      updatedAt: returrefreshToken?.userId.updatedAt
    };
    return {
      token,
      refreshToken,
      user
    };
  }
}) || _class) || _class) || _class) || _class);