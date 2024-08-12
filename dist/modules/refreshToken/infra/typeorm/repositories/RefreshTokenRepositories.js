"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshTokenRepostory = void 0;
var _RefreshToken = require("../Entities/RefreshToken");
var _appDataSource = require("../../../../../main/infra/typeorm/connection/app-data-source");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _AppError = require("../../../../../error/AppError");
var _Users = require("../../../../../modules/accounts/infra/typeorm/Entities/Users");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class RefreshTokenRepostory {
  constructor() {
    this.repositoryRefleshToken = void 0;
    this.repositoryUsers = void 0;
    this.repositoryRefleshToken = _appDataSource.myDataSource.getRepository(_RefreshToken.RefreshToken);
    this.repositoryUsers = _appDataSource.myDataSource.getRepository(_Users.Users);
  }
  async getOne(refresh_token) {
    const refreshToken = await this.repositoryRefleshToken.createQueryBuilder('r').leftJoinAndSelect('r.userId', 'users').where('r.id=:refresh_token', {
      refresh_token
    }).getOne();
    console.log(refreshToken);
    if (!refreshToken) {
      throw new _AppError.AppError('Missing token');
    }
    return refreshToken;
  }
  async create(userId) {
    const expiriesIn = (0, _dayjs.default)().add(20, 'seconds').unix(); //unix cria um numererico
    console.log(userId);
    const userAlreadyExist = await this.repositoryUsers.findOneBy({
      id: userId
    });
    if (!userAlreadyExist) {
      throw new _AppError.AppError('User not found');
    }
    const generateRefleshToken = await this.repositoryRefleshToken.create({
      userId: userAlreadyExist,
      expiriesIn
    });
    const refreshToken = this.repositoryRefleshToken.save(generateRefleshToken);
    return refreshToken;
  }
  async deleteMany(userId) {
    const userAlreadyExist = await this.repositoryUsers.findOneBy({
      id: userId
    });
    if (!userAlreadyExist) {
      throw new _AppError.AppError('User not found');
    }
    await this.repositoryRefleshToken.delete({
      userId: userAlreadyExist
    });
  }
}
exports.RefreshTokenRepostory = RefreshTokenRepostory;