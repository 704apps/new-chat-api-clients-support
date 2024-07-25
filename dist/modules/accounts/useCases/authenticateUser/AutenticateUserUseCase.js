"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.AutenticateUserUseCase = void 0;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt_1 = require("bcrypt");
const AppError_1 = require("@error/AppError");
const GenerateRefleshToken_1 = require("@modules/refleshToken/useCases/GenerateRefleshToken");
const tsyringe_2 = require("tsyringe");
let AutenticateUserUseCase = class AutenticateUserUseCase {
    constructor(userRespository) {
        this.userRespository = userRespository;
    }
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password }) {
            const user = yield this.userRespository.findByEmail(email);
            if (!user) {
                throw new AppError_1.AppError("Email or password incorrect!");
            }
            const passwordMath = yield (0, bcrypt_1.compare)(password, user.password);
            if (!passwordMath) {
                throw new AppError_1.AppError("Email or password incorrect!");
            }
            ;
            const secretKey = String(process.env.SECRET_key);
            const token = (0, jsonwebtoken_1.sign)({}, secretKey, {
                subject: `${user.id}`, // Define o subject (assunto) do token
                expiresIn: '20s' // Define a expiração do token para 1 hora
            });
            const generateRefleshToken = tsyringe_2.container.resolve(GenerateRefleshToken_1.GenerateRefleshToken);
            const tokenReturn = {
                token,
                user: {
                    name: user.name,
                    email: user.email
                }
            };
            return tokenReturn;
        });
    }
};
exports.AutenticateUserUseCase = AutenticateUserUseCase;
exports.AutenticateUserUseCase = AutenticateUserUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("UserRepository")),
    __metadata("design:paramtypes", [Object])
], AutenticateUserUseCase);
