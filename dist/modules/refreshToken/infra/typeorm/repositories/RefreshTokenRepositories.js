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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenRepostory = void 0;
var RefreshToken_1 = require("../Entities/RefreshToken");
var app_data_source_1 = require("../../../../../main/infra/typeorm/connection/app-data-source");
var dayjs_1 = __importDefault(require("dayjs"));
var AppError_1 = require("../../../../../error/AppError");
var Users_1 = require("../../../../../modules/accounts/infra/typeorm/Entities/Users");
var RefreshTokenRepostory = /** @class */ (function () {
    function RefreshTokenRepostory() {
        this.repositoryRefleshToken = app_data_source_1.myDataSource.getRepository(RefreshToken_1.RefreshToken);
        this.repositoryUsers = app_data_source_1.myDataSource.getRepository(Users_1.Users);
    }
    RefreshTokenRepostory.prototype.getOne = function (refresh_token) {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repositoryRefleshToken.createQueryBuilder('r')
                            .leftJoinAndSelect('r.userId', 'users')
                            .where('r.id=:refresh_token', { refresh_token: refresh_token })
                            .getOne()
                        // console.log(refreshToken)
                    ];
                    case 1:
                        refreshToken = _a.sent();
                        // console.log(refreshToken)
                        if (!refreshToken) {
                            throw new AppError_1.AppError('Missing token');
                        }
                        return [2 /*return*/, refreshToken];
                }
            });
        });
    };
    RefreshTokenRepostory.prototype.create = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var expiriesIn, userAlreadyExist, generateRefleshToken, refreshToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expiriesIn = (0, dayjs_1.default)().add(20, 'seconds').unix();
                        return [4 /*yield*/, this.repositoryUsers.findOneBy({ id: userId })];
                    case 1:
                        userAlreadyExist = _a.sent();
                        if (!userAlreadyExist) {
                            throw new AppError_1.AppError('User not found');
                        }
                        return [4 /*yield*/, this.repositoryRefleshToken.create({
                                userId: userAlreadyExist,
                                expiriesIn: expiriesIn
                            })];
                    case 2:
                        generateRefleshToken = _a.sent();
                        refreshToken = this.repositoryRefleshToken.save(generateRefleshToken);
                        return [2 /*return*/, refreshToken];
                }
            });
        });
    };
    RefreshTokenRepostory.prototype.deleteMany = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var userAlreadyExist;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repositoryUsers.findOneBy({ id: userId })];
                    case 1:
                        userAlreadyExist = _a.sent();
                        if (!userAlreadyExist) {
                            throw new AppError_1.AppError('User not found');
                        }
                        return [4 /*yield*/, this.repositoryRefleshToken.delete({ userId: userAlreadyExist })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return RefreshTokenRepostory;
}());
exports.RefreshTokenRepostory = RefreshTokenRepostory;