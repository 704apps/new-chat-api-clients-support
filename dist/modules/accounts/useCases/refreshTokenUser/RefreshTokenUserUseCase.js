"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshTokenUserUseCase = void 0;
var _AppError = require("../../../../error/AppError");
var _GenerateToeknProvider = require("../../../../modules/accounts/provider/GenerateToeknProvider");
var _IRefreshTokenRepositoies = require("../../../../modules/refreshToken/repositories/IRefreshTokenRepositoies");
var _GenerateRefreshToken = require("../../../../modules/refreshToken/useCases/genereRefreshToken/GenerateRefreshToken");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
let RefreshTokenUserUseCase = exports.RefreshTokenUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("RefreshTokenRepostory")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IRefreshTokenRepositoies.IRefreshTokenRepostory === "undefined" ? Object : _IRefreshTokenRepositoies.IRefreshTokenRepostory]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class RefreshTokenUserUseCase {
  constructor(repositoryRefreshToken) {
    this.repositoryRefreshToken = repositoryRefreshToken;
  }
  async execute(refresh_token) {
    const refreshToken = await this.repositoryRefreshToken.getOne(refresh_token);
    if (!refreshToken) {
      throw new _AppError.AppError('Refresh token invalid');
    }
    const refreshTokenExpired = (0, _dayjs.default)().isAfter(_dayjs.default.unix(refreshToken.expiriesIn));
    const generateRefleshToken = new _GenerateToeknProvider.GenerateTokenProvider();
    const token = await generateRefleshToken.execute(String(refreshToken.userId.id));
    if (refreshTokenExpired) {
      const generateRefleshTokenProvider = _tsyringe.container.resolve(_GenerateRefreshToken.GenerateRefreshToken);
      const nRefreshToken = await generateRefleshTokenProvider.execute(String(refreshToken.userId.id));
      const newRefreshToken = {
        id: nRefreshToken?.id
      };
      const user = {
        expiriesIn: nRefreshToken?.expiriesIn,
        userid: nRefreshToken?.userId.id,
        userName: refreshToken?.userId.name,
        supportId: refreshToken?.userId.name,
        email: refreshToken?.userId.email,
        avatar: refreshToken?.userId.avatar,
        createdAt: refreshToken?.userId.createdAt,
        updatedAt: refreshToken?.userId.updatedAt
      };
      return {
        token,
        newRefreshToken,
        user
      };
    }
    const user = {
      userid: refreshToken?.userId.id,
      userName: refreshToken?.userId.name,
      supportId: refreshToken?.userId.name,
      email: refreshToken?.userId.email,
      avatar: refreshToken?.userId.avatar,
      createdAt: refreshToken?.userId.createdAt,
      updatedAt: refreshToken?.userId.updatedAt
    };
    return {
      token,
      user
    };
  }
}) || _class) || _class) || _class) || _class);