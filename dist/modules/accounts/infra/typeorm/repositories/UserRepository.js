"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;
var _appDataSource = require("../../../../../main/infra/typeorm/connection/app-data-source");
var _Users = require("../Entities/Users");
var _AppError = require("../../../../../error/AppError");
var _tsyringe = require("tsyringe");
var _aws = require("../../../../../main/infra/upload/aws");
var _alterNameForSupporId = require("../../../util/alterNameForSupporId");
var _dec, _dec2, _dec3, _class;
let UserRepository = exports.UserRepository = (_dec = (0, _tsyringe.injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = class UserRepository {
  constructor() {
    this.repository = void 0;
    this.repository = _appDataSource.myDataSource.getRepository(_Users.Users);
  }
  async edit(data) {
    const {
      id,
      email,
      name
    } = data;
    const user = await this.repository.findOneBy({
      id
    });
    // console.log(email)
    user.name = name;
    user.email = email;
    const updateUser = await this.repository.save(user);
    return updateUser;
  }
  async updateUserToSubMaster(id, role) {
    const user = await this.repository.findOneBy({
      id
    });
    user.role = role;
    const updateuser = await this.repository.save(user);
    return updateuser;
  }
  async create({
    name,
    email,
    password,
    role
  }) {
    const user = await this.repository.create({
      name,
      email,
      password,
      role,
      active: true
    });
    const userCreated = await this.repository.save(user);
    const returnCreatedUser = {
      id: userCreated.id,
      name: userCreated.name,
      supportId: await (0, _alterNameForSupporId.alterNameForSupporId)(userCreated.name),
      email: userCreated.email,
      avatar: userCreated.avatar,
      active: userCreated.active,
      role: userCreated.role,
      createdAt: userCreated.createdAt,
      updatedAt: userCreated.updatedAt
    };
    return returnCreatedUser;
  }
  async findByEmail(email) {
    const user = await this.repository.findOneBy({
      email
    });
    return user;
  }
  async findById(id) {
    //  console.log('veio aqui')

    const user = await this.repository.findOneBy({
      id
    });
    // console.log(user)
    return user;
  }
  async uploadMedia(data) {
    try {
      const {
        filename,
        filecontent,
        id
      } = data;
      const user = await this.repository.findOneBy({
        id
      });
      if (!user) {
        throw new _AppError.AppError('User not found!');
      }
      const urlImage = await (0, _aws.uploadToAws)(filename, filecontent);
      user.avatar = urlImage;
      const avatarUpdate = await this.repository.save(user);
      const userUpdateAvatar = {
        id: avatarUpdate.id,
        name: avatarUpdate.name,
        supportId: await (0, _alterNameForSupporId.alterNameForSupporId)(avatarUpdate.name),
        email: avatarUpdate.email,
        avatar: avatarUpdate.avatar,
        active: avatarUpdate.active,
        role: avatarUpdate.role,
        createdAt: avatarUpdate.createdAt,
        updatedAt: avatarUpdate.updatedAt
      };
      return userUpdateAvatar;
    } catch (error) {
      //  console.log('veio error')

      //  console.log(error)

      return;
    }
  }
  async deleteUser(id) {
    //  console.log('veio aqui')

    const user = await this.repository.findOneBy({
      id
    });
    if (!user) {
      throw new _AppError.AppError('User Not Found');
    }
    await this.repository.delete(id);
    return 'User deleted successfully ';
  }
  async getLoggedInUser(id) {
    //  console.log('veio aqui')

    const user = await this.repository.findOneBy({
      id
    });
    if (!user) {
      throw new _AppError.AppError('User Not Found');
    }
    await this.repository.delete(id);
    return 'User deleted successfully ';
  }
  async disableUser(id, action) {
    //  console.log('veio aqui')

    const user = await this.repository.findOneBy({
      id
    });
    if (!user) {
      throw new _AppError.AppError('User Not Found');
    }
    user.active = action;
    let seeAction = 'deactivated';
    if (action) {
      seeAction = 'reactivated';
    }
    await this.repository.save(user);
    return `User successfully ${seeAction}!`;
  }
  async allUsers() {
    //   console.log('veio aqui')
    try {
      const users = await this.repository.find();
      return users;
    } catch (error) {
      throw new _AppError.AppError('dfdfdf');
    }
  }
  async resetPasswordNoEmail(id, newPassword) {
    // console.log('veio aqui')
    try {
      const user = await this.repository.findOneBy({
        id
      });
      if (!user) {
        throw new _AppError.AppError('User Not Found');
      }
      user.password = newPassword;
      await this.repository.save(user);
      return 'Password change successfully';
    } catch (error) {
      throw new _AppError.AppError('', 400, {
        error
      });
    }
  }
}) || _class) || _class) || _class);