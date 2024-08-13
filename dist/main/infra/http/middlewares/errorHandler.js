"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandler = errorHandler;
var _AppError = require("../../../../error/AppError");
function errorHandler(err, request, response, next) {
  console.log('entrou aqui');
  if (err instanceof _AppError.AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      error: err.error
    });
  }
  console.log('veio aqui error');
  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  });
}