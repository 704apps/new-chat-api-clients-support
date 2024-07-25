"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = ensureAuthenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("@error/AppError");
const UserRepository_1 = require("@modules/accounts/infra/typeorm/repositories/UserRepository");
function ensureAuthenticated(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const authorization = request.headers.authorization;
            if (!authorization) {
                throw new AppError_1.AppError("Token missing", 401); //Token Ausente
            }
            const [, token] = authorization.split(" ");
            const secretKey = String(process.env.SECRET_KEY);
            const { sub: user_id } = (0, jsonwebtoken_1.verify)(token, secretKey);
            const userRepository = new UserRepository_1.UserRepository();
            const user = yield userRepository.findById(Number(user_id));
            if (!user) {
                throw new AppError_1.AppError("User does not exists", 401);
            }
            const id = Number(user_id);
            request.user = { id };
        }
        catch (error) {
            throw new AppError_1.AppError("Invalid token", 401);
        }
    });
}
