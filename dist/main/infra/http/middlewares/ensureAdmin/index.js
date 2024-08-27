"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAdmin = ensureAdmin;
exports.ensureAdminAndSubadmin = ensureAdminAndSubadmin;
var _AppError = require("../../../../../error/AppError");
var _jsonwebtoken = require("jsonwebtoken");
var _UserRepository = require("../../../../../modules/accounts/infra/typeorm/repositories/UserRepository");
// Middleware para verificar se o usuário é admin
async function ensureAdmin(request, response, next) {
  try {
    const authHeader = request.headers.authorization;
    // console.log('veio aqui no admin')

    if (!authHeader) {
      throw new _AppError.AppError('Token missing', 401);
    }
    // console.log('veio aqui no admin2')

    const [, token] = authHeader.split(' ');
    //console.log('veio aqui no admin3')
    try {
      const {
        sub: userId
      } = (0, _jsonwebtoken.verify)(token, process.env.SECRET_JWT);
      //  console.log('veio aqui no admin4')
      const userRepository = new _UserRepository.UserRepository();
      //  console.log('veio aqui no admin5')

      const user = await userRepository.findById(userId);
      //   console.log('veio aqui no admin6')

      if (!user) {
        //      console.log('veio aqui no erro user')
        return next(new _AppError.AppError('Access denied', 403));
      }
      if (user.role !== 'MASTER') {
        return next(new _AppError.AppError('Access denied', 403));
      }
      next();
    } catch (error) {
      if (error instanceof _jsonwebtoken.TokenExpiredError) {
        throw new _AppError.AppError('Invalid token', 401);
      }

      // Outros erros podem ser tratados aqui
      throw new _AppError.AppError('Invalid token.', 401);
    }
  } catch (error) {
    return next(new _AppError.AppError('Access denied', 403));
  }
}

// Middleware para verificar se o usuário é subadmin
async function ensureAdminAndSubadmin(request, response, next) {
  try {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new _AppError.AppError('Token missing', 401);
    }
    const [, token] = authHeader.split(' ');

    // Verifica o token JWT
    const {
      sub: userId
    } = (0, _jsonwebtoken.verify)(token, process.env.SECRET_JWT);
    const userRepository = new _UserRepository.UserRepository();
    const user = await userRepository.findById(userId);
    if (!user) {
      return next(new _AppError.AppError('Access denied', 403));
    } // Supondo que o usuário autenticado é armazenado em request.user

    if (user.role !== 'SUBMASTER' && user.role !== 'MASTER') {
      return next(new _AppError.AppError('Access denied', 403));
    }
    next();
  } catch (error) {
    return next(new _AppError.AppError('Access denied', 403));
  }
}