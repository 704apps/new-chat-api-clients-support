"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError {
    constructor(message, statusCode = 400, error = {}) {
        this.message = message;
        this.statusCode = statusCode;
        this.error = error;
    }
}
exports.AppError = AppError;
