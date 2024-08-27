"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
var AppError = /** @class */ (function () {
    function AppError(message, statusCode, error) {
        if (statusCode === void 0) { statusCode = 400; }
        if (error === void 0) { error = {}; }
        this.message = message;
        this.statusCode = statusCode;
        error ? this.error = error : null;
    }
    return AppError;
}());
exports.AppError = AppError;
