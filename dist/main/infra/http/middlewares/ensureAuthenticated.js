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
exports.ensureAuthenticated = ensureAuthenticated;
var jsonwebtoken_1 = require("jsonwebtoken");
var AppError_1 = require("../../../../error/AppError");
var UserRepository_1 = require("../../../../modules/accounts/infra/typeorm/repositories/UserRepository");
var tsyringe_1 = require("tsyringe");
var GetOneMessagesUseCase_1 = require("../../../../modules/messages/useCases/getOneMessage/GetOneMessagesUseCase");
function compareToken(pc, tk) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (pc !== tk) {
                return [2 /*return*/, false];
            }
            return [2 /*return*/, true];
        });
    });
}
function ensureAuthenticated(request, response, next) {
    return __awaiter(this, void 0, void 0, function () {
        var authHeader, _a, token, userId, userRepository, user, error_1, authHeader, _b, token, id, projectId_1, tokenMatches_1, error_2, getNewMessagesClientUseCase, messages, projectId, tokenMatches, error_3, authHeader, _c, token, id, tokenMatches, error_4;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 18]);
                    authHeader = request.headers.authorization;
                    if (!authHeader) {
                        throw new AppError_1.AppError('Token missing', 401);
                    }
                    _a = authHeader.split(' '), token = _a[1];
                    userId = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_JWT).sub;
                    userRepository = new UserRepository_1.UserRepository();
                    return [4 /*yield*/, userRepository.findById(userId)];
                case 1:
                    user = _d.sent();
                    if (!user) {
                        throw new AppError_1.AppError('User does not exist!', 401);
                    }
                    return [2 /*return*/, next()];
                case 2:
                    error_1 = _d.sent();
                    if (!(error_1 instanceof jsonwebtoken_1.JsonWebTokenError)) return [3 /*break*/, 16];
                    _d.label = 3;
                case 3:
                    _d.trys.push([3, 10, , 15]);
                    authHeader = request.headers.authorization;
                    if (!authHeader) {
                        //console.log('veio aqui antes0')
                        throw new AppError_1.AppError('Token missing', 401);
                    }
                    _b = authHeader.split(' '), token = _b[1];
                    id = request.params.id;
                    if (!!id) return [3 /*break*/, 7];
                    projectId_1 = request.body.projectId;
                    _d.label = 4;
                case 4:
                    _d.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, compareToken(projectId_1, token)];
                case 5:
                    tokenMatches_1 = _d.sent();
                    if (!tokenMatches_1) {
                        //       console.log('veio aqui3:' + projectId)
                        throw new AppError_1.AppError('Invalid or expired token', 401);
                    }
                    return [2 /*return*/, next()];
                case 6:
                    error_2 = _d.sent();
                    throw new AppError_1.AppError('Invalid or expired token', 401, { error: error_2 });
                case 7:
                    getNewMessagesClientUseCase = tsyringe_1.container.resolve(GetOneMessagesUseCase_1.GetOneMessagesClientUseCase);
                    return [4 /*yield*/, getNewMessagesClientUseCase.getOneMessage(Number(id))];
                case 8:
                    messages = _d.sent();
                    projectId = messages.projectId;
                    return [4 /*yield*/, compareToken(projectId, token)];
                case 9:
                    tokenMatches = _d.sent();
                    if (!tokenMatches) {
                        throw new AppError_1.AppError('Invalid or expired token', 401);
                    }
                    return [2 /*return*/, next()];
                case 10:
                    error_3 = _d.sent();
                    _d.label = 11;
                case 11:
                    _d.trys.push([11, 13, , 14]);
                    authHeader = request.headers.authorization;
                    if (!authHeader) {
                        //console.log('veio aqui antes0')
                        throw new AppError_1.AppError('Token missing', 401);
                    }
                    _c = authHeader.split(' '), token = _c[1];
                    id = request.params.id;
                    return [4 /*yield*/, compareToken(id, token)];
                case 12:
                    tokenMatches = _d.sent();
                    if (!tokenMatches) {
                        throw new AppError_1.AppError('Invalid or expired token', 401);
                    }
                    return [2 /*return*/, next()];
                case 13:
                    error_4 = _d.sent();
                    throw new AppError_1.AppError('Invalid or expired token', 401, { error: error_4 });
                case 14:
                    ;
                    return [3 /*break*/, 15];
                case 15: return [3 /*break*/, 17];
                case 16: return [2 /*return*/, next(error_1)];
                case 17: return [3 /*break*/, 18];
                case 18: return [2 /*return*/];
            }
        });
    });
}
