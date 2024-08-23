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
exports.ensureAdmin = ensureAdmin;
exports.ensureAdminAndSubadmin = ensureAdminAndSubadmin;
var AppError_1 = require("../../../../../error/AppError");
var jsonwebtoken_1 = require("jsonwebtoken");
var UserRepository_1 = require("../../../../../modules/accounts/infra/typeorm/repositories/UserRepository");
// Middleware para verificar se o usuário é admin
function ensureAdmin(request, response, next) {
    return __awaiter(this, void 0, void 0, function () {
        var authHeader, _a, token, userId, userRepository, user, error_1, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    authHeader = request.headers.authorization;
                    console.log('veio aqui no admin');
                    if (!authHeader) {
                        throw new AppError_1.AppError('Token missing', 401);
                    }
                    console.log('veio aqui no admin2');
                    _a = authHeader.split(' '), token = _a[1];
                    console.log('veio aqui no admin3');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    userId = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_JWT).sub;
                    console.log('veio aqui no admin4');
                    userRepository = new UserRepository_1.UserRepository();
                    console.log('veio aqui no admin5');
                    return [4 /*yield*/, userRepository.findById(userId)];
                case 2:
                    user = _b.sent();
                    console.log('veio aqui no admin6');
                    if (!user) {
                        console.log('veio aqui no erro user');
                        return [2 /*return*/, next(new AppError_1.AppError('Access denied', 403))];
                    }
                    if (user.role !== 'MASTER') {
                        return [2 /*return*/, next(new AppError_1.AppError('Access denied', 403))];
                    }
                    next();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    if (error_1 instanceof jsonwebtoken_1.TokenExpiredError) {
                        throw new AppError_1.AppError('Invalid token', 401);
                    }
                    // Outros erros podem ser tratados aqui
                    throw new AppError_1.AppError('Invalid token.', 401);
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_2 = _b.sent();
                    return [2 /*return*/, next(new AppError_1.AppError('Access denied', 403))];
                case 6: return [2 /*return*/];
            }
        });
    });
}
// Middleware para verificar se o usuário é subadmin
function ensureAdminAndSubadmin(request, response, next) {
    return __awaiter(this, void 0, void 0, function () {
        var authHeader, _a, token, userId, userRepository, user, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    authHeader = request.headers.authorization;
                    if (!authHeader) {
                        throw new AppError_1.AppError('Token missing', 401);
                    }
                    _a = authHeader.split(' '), token = _a[1];
                    userId = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_JWT).sub;
                    userRepository = new UserRepository_1.UserRepository();
                    return [4 /*yield*/, userRepository.findById(userId)];
                case 1:
                    user = _b.sent();
                    if (!user) {
                        return [2 /*return*/, next(new AppError_1.AppError('Access denied', 403))];
                    } // Supondo que o usuário autenticado é armazenado em request.user
                    if (user.role !== 'SUBMASTER' && user.role !== 'MASTER') {
                        return [2 /*return*/, next(new AppError_1.AppError('Access denied', 403))];
                    }
                    next();
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    return [2 /*return*/, next(new AppError_1.AppError('Access denied', 403))];
                case 3: return [2 /*return*/];
            }
        });
    });
}
