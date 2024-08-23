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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticateUserUseCase = void 0;
require("reflect-metadata");
var tsyringe_1 = require("tsyringe");
var jsonwebtoken_1 = require("jsonwebtoken");
var bcrypt_1 = require("bcrypt");
var AppError_1 = require("../../../../error/AppError");
var GenerateRefreshToken_1 = require("../../../../modules/refreshToken/useCases/genereRefreshToken/GenerateRefreshToken");
var tsyringe_2 = require("tsyringe");
var DeleteRefreshToken_1 = require("../../../../modules/refreshToken/useCases/deteteRefreshToken/DeleteRefreshToken");
var alterNameForSupporId_1 = require("../../../../modules/accounts/util/alterNameForSupporId");
var AutenticateUserUseCase = /** @class */ (function () {
    function AutenticateUserUseCase(userRespository) {
        this.userRespository = userRespository;
    }
    AutenticateUserUseCase.prototype.execute = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var userVerify, passwordMath, secretKey, token, generateRefleshToken, deleteRefleshToken, returrefreshToken, refreshToken, user;
            var _c;
            var email = _b.email, password = _b.password;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.userRespository.findByEmail(email)];
                    case 1:
                        userVerify = _d.sent();
                        if (!userVerify) {
                            throw new AppError_1.AppError("Email or password incorrect!");
                        }
                        if (!userVerify.active) {
                            throw new AppError_1.AppError('This User has been deactivated!', 400);
                        }
                        return [4 /*yield*/, (0, bcrypt_1.compare)(password, userVerify.password)];
                    case 2:
                        passwordMath = _d.sent();
                        if (!passwordMath) {
                            //  console.log('veio aqui 2')
                            throw new AppError_1.AppError("Email or password incorrect!");
                        }
                        ;
                        secretKey = String(process.env.SECRET_JWT);
                        token = (0, jsonwebtoken_1.sign)({}, secretKey, {
                            subject: "".concat(userVerify.id), // Define o subject (assunto) do token
                            expiresIn: '24h' // Define o tempo de expiração do token para 1 hora
                        });
                        generateRefleshToken = tsyringe_2.container.resolve(GenerateRefreshToken_1.GenerateRefreshToken);
                        deleteRefleshToken = tsyringe_2.container.resolve(DeleteRefreshToken_1.DeleteRefreshToken);
                        return [4 /*yield*/, deleteRefleshToken.deleteMany(userVerify.id)];
                    case 3:
                        _d.sent();
                        return [4 /*yield*/, generateRefleshToken.execute(userVerify.id)];
                    case 4:
                        returrefreshToken = _d.sent();
                        refreshToken = {
                            id: returrefreshToken === null || returrefreshToken === void 0 ? void 0 : returrefreshToken.id,
                            expiriesIn: returrefreshToken === null || returrefreshToken === void 0 ? void 0 : returrefreshToken.expiriesIn,
                        };
                        _c = {
                            id: returrefreshToken === null || returrefreshToken === void 0 ? void 0 : returrefreshToken.userId.id,
                            name: returrefreshToken === null || returrefreshToken === void 0 ? void 0 : returrefreshToken.userId.name
                        };
                        return [4 /*yield*/, (0, alterNameForSupporId_1.alterNameForSupporId)(returrefreshToken.userId.name)];
                    case 5:
                        user = (_c.supportId = _d.sent(),
                            _c.email = returrefreshToken === null || returrefreshToken === void 0 ? void 0 : returrefreshToken.userId.email,
                            _c.role = returrefreshToken === null || returrefreshToken === void 0 ? void 0 : returrefreshToken.userId.role,
                            _c.active = returrefreshToken === null || returrefreshToken === void 0 ? void 0 : returrefreshToken.userId.active,
                            _c.createdAt = returrefreshToken === null || returrefreshToken === void 0 ? void 0 : returrefreshToken.userId.createdAt,
                            _c.updatedAt = returrefreshToken === null || returrefreshToken === void 0 ? void 0 : returrefreshToken.userId.updatedAt,
                            _c);
                        return [2 /*return*/, { token: token, refreshToken: refreshToken, user: user }];
                }
            });
        });
    };
    AutenticateUserUseCase = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("UserRepository")),
        __metadata("design:paramtypes", [Object])
    ], AutenticateUserUseCase);
    return AutenticateUserUseCase;
}());
exports.AutenticateUserUseCase = AutenticateUserUseCase;
