"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutenticateUserUseCase = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _IUsersRepository = require("../../../../modules/accounts/repositories/IUsersRepository");
var _jsonwebtoken = require("jsonwebtoken");
var _bcryptjs = require("bcryptjs");
var _AppError = require("../../../../error/AppError");
var _GenerateRefreshToken = require("../../../../modules/refreshToken/useCases/genereRefreshToken/GenerateRefreshToken");
var _DeleteRefreshToken = require("../../../../modules/refreshToken/useCases/deteteRefreshToken/DeleteRefreshToken");
var _alterNameForSupporId = require("../../../../modules/accounts/util/alterNameForSupporId");
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
    if (!userVerify.active) {
      throw new _AppError.AppError('This User has been deactivated!', 400);
    }
    //     console.log('veio aqui 1')

    const passwordMath = await (0, _bcryptjs.compare)(password, userVerify.password);
    console.log(passwordMath);
    if (!passwordMath) {
      //  console.log('veio aqui 2')
      throw new _AppError.AppError("Email or password incorrect!");
    }
    ;
    const secretKey = String(process.env.SECRET_JWT);
    const token = (0, _jsonwebtoken.sign)({}, secretKey, {
      subject: `${userVerify.id}`,
      // Define o subject (assunto) do token
      expiresIn: '24h' // Define o tempo de expiração do token para 1 hora
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
      id: returrefreshToken?.userId.id,
      name: returrefreshToken?.userId.name,
      supportId: await (0, _alterNameForSupporId.alterNameForSupporId)(returrefreshToken.userId.name),
      email: returrefreshToken?.userId.email,
      role: returrefreshToken?.userId.role,
      active: returrefreshToken?.userId.active,
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