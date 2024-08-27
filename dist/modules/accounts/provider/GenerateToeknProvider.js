"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenerateTokenProvider = void 0;
var _jsonwebtoken = require("jsonwebtoken");
class GenerateTokenProvider {
  async execute(userId) {
    const secretKey = String(process.env.SECRET_JWT);
    // console.log(userId)
    const token = (0, _jsonwebtoken.sign)({}, secretKey, {
      subject: `${userId}`,
      // Define o subject (assunto) do token
      expiresIn: '24h' // Define a expiração do token para 24 hora
    });
    return token;
  }
}
exports.GenerateTokenProvider = GenerateTokenProvider;