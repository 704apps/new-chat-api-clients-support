"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAuthenticated = ensureAuthenticated;
var _jsonwebtoken = require("jsonwebtoken");
var _AppError = require("../../../../error/AppError");
var _UserRepository = require("../../../../modules/accounts/infra/typeorm/repositories/UserRepository");
async function ensureAuthenticated(request, response, next) {
  try {
    const authHerder = request.headers.authorization;
    console.log('veio pelo menos aqui');
    if (!authHerder) {
      throw new _AppError.AppError("Token missing", 401);
    }
    console.log('veio pelo menos aqui2');
    const [, token] = authHerder.split(" ");
    const {
      sub: userId
    } = (0, _jsonwebtoken.verify)(token, "e434b149e2f3c418268e23d778777dfc");
    const userRepository = new _UserRepository.UserRepository();
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new _AppError.AppError("User does not exists!", 401);
    }

    //Aqui foi sobrescrito uma tipagem no @types

    next();
  } catch (error) {
    next(error);
    // throw new AppError("Invalid token", 401)
  }
}