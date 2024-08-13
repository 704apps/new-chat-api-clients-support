"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppError = void 0;
class AppError {
  constructor(message, statusCode = 400, error = {}) {
    this.message = void 0;
    this.statusCode = void 0;
    this.error = void 0;
    this.message = message;
    this.statusCode = statusCode;
    error ? this.error = error : null;
  }
}
exports.AppError = AppError;