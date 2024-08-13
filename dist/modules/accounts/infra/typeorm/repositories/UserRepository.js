"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;
var _appDataSource = require("../../../../../main/infra/typeorm/connection/app-data-source");
var _Users = require("../Entities/Users");
var _AppError = require("../../../../../error/AppError");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _class;
let UserRepository = exports.UserRepository = (_dec = (0, _tsyringe.injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = class UserRepository {
  constructor() {
    this.repository = void 0;
    this.repository = _appDataSource.myDataSource.getRepository(_Users.Users);
  }
  async create({
    name,
    email,
    password
  }) {
    const user = await this.repository.create({
      name,
      email,
      password
    });
    const userCreated = await this.repository.save(user);
    return userCreated;
  }
  async findByEmail(email) {
    const user = await this.repository.findOneBy({
      email
    });
    return user;
  }
  async findById(id) {
    console.log('veio aqui');
    try {
      const user = await this.repository.findOneBy({
        id
      });
      return user;
    } catch (error) {
      throw new _AppError.AppError('dfdfdf');
    }
  }
}) || _class) || _class) || _class);