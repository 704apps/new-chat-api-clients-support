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
exports.UserRepository = void 0;
var app_data_source_1 = require("../../../../../main/infra/typeorm/connection/app-data-source");
var Users_1 = require("../Entities/Users");
var AppError_1 = require("../../../../../error/AppError");
var tsyringe_1 = require("tsyringe");
var aws_1 = require("../../../../../main/infra/upload/aws");
var alterNameForSupporId_1 = require("../../../util/alterNameForSupporId");
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.repository = app_data_source_1.myDataSource.getRepository(Users_1.Users);
    }
    UserRepository.prototype.edit = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var id, email, name, user, updateUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = data.id, email = data.email, name = data.name;
                        return [4 /*yield*/, this.repository.findOneBy({ id: id })];
                    case 1:
                        user = _a.sent();
                        console.log(email);
                        user.name = name;
                        user.email = email;
                        return [4 /*yield*/, this.repository.save(user)];
                    case 2:
                        updateUser = _a.sent();
                        return [2 /*return*/, updateUser];
                }
            });
        });
    };
    UserRepository.prototype.updateUserToSubMaster = function (id, role) {
        return __awaiter(this, void 0, void 0, function () {
            var user, updateuser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOneBy({ id: id })];
                    case 1:
                        user = _a.sent();
                        user.role = role;
                        return [4 /*yield*/, this.repository.save(user)];
                    case 2:
                        updateuser = _a.sent();
                        return [2 /*return*/, updateuser];
                }
            });
        });
    };
    UserRepository.prototype.create = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var user, userCreated, returnCreatedUser;
            var _c;
            var name = _b.name, email = _b.email, password = _b.password, role = _b.role;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.repository.create({
                            name: name,
                            email: email,
                            password: password,
                            role: role,
                            active: true
                        })];
                    case 1:
                        user = _d.sent();
                        return [4 /*yield*/, this.repository.save(user)];
                    case 2:
                        userCreated = _d.sent();
                        _c = {
                            id: userCreated.id,
                            name: userCreated.name
                        };
                        return [4 /*yield*/, (0, alterNameForSupporId_1.alterNameForSupporId)(userCreated.name)];
                    case 3:
                        returnCreatedUser = (_c.supportId = _d.sent(),
                            _c.email = userCreated.email,
                            _c.avatar = userCreated.avatar,
                            _c.active = userCreated.active,
                            _c.role = userCreated.role,
                            _c.createdAt = userCreated.createdAt,
                            _c.updatedAt = userCreated.updatedAt,
                            _c);
                        return [2 /*return*/, returnCreatedUser];
                }
            });
        });
    };
    UserRepository.prototype.findByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOneBy({ email: email })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserRepository.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOneBy({ id: id })
                        // console.log(user)
                    ];
                    case 1:
                        user = _a.sent();
                        // console.log(user)
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserRepository.prototype.uploadMedia = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var filename, filecontent, id, user, urlImage, avatarUpdate, userUpdateAvatar, error_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        filename = data.filename, filecontent = data.filecontent, id = data.id;
                        return [4 /*yield*/, this.repository.findOneBy({ id: id })];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            throw new AppError_1.AppError('User not found!');
                        }
                        return [4 /*yield*/, (0, aws_1.uploadToAws)(filename, filecontent)];
                    case 2:
                        urlImage = _b.sent();
                        user.avatar = urlImage;
                        return [4 /*yield*/, this.repository.save(user)];
                    case 3:
                        avatarUpdate = _b.sent();
                        _a = {
                            id: avatarUpdate.id,
                            name: avatarUpdate.name
                        };
                        return [4 /*yield*/, (0, alterNameForSupporId_1.alterNameForSupporId)(avatarUpdate.name)];
                    case 4:
                        userUpdateAvatar = (_a.supportId = _b.sent(),
                            _a.email = avatarUpdate.email,
                            _a.avatar = avatarUpdate.avatar,
                            _a.active = avatarUpdate.active,
                            _a.role = avatarUpdate.role,
                            _a.createdAt = avatarUpdate.createdAt,
                            _a.updatedAt = avatarUpdate.updatedAt,
                            _a);
                        return [2 /*return*/, userUpdateAvatar];
                    case 5:
                        error_1 = _b.sent();
                        console.log('veio error');
                        console.log(error_1);
                        return [2 /*return*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.deleteUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOneBy({ id: id })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new AppError_1.AppError('User Not Found');
                        }
                        return [4 /*yield*/, this.repository.delete(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 'User deleted successfully '];
                }
            });
        });
    };
    UserRepository.prototype.getLoggedInUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOneBy({ id: id })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new AppError_1.AppError('User Not Found');
                        }
                        return [4 /*yield*/, this.repository.delete(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 'User deleted successfully '];
                }
            });
        });
    };
    UserRepository.prototype.disableUser = function (id, action) {
        return __awaiter(this, void 0, void 0, function () {
            var user, seeAction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOneBy({ id: id })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new AppError_1.AppError('User Not Found');
                        }
                        user.active = action;
                        seeAction = 'deactivated';
                        if (action) {
                            seeAction = 'reactivated';
                        }
                        return [4 /*yield*/, this.repository.save(user)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, "User successfully ".concat(seeAction, "!")];
                }
            });
        });
    };
    UserRepository.prototype.allUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repository.find()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                    case 2:
                        error_2 = _a.sent();
                        throw new AppError_1.AppError('dfdfdf');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.resetPasswordNoEmail = function (id, newPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.repository.findOneBy({ id: id })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new AppError_1.AppError('User Not Found');
                        }
                        user.password = newPassword;
                        return [4 /*yield*/, this.repository.save(user)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 'Password change successfully'];
                    case 3:
                        error_3 = _a.sent();
                        throw new AppError_1.AppError('', 400, { error: error_3 });
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository = __decorate([
        (0, tsyringe_1.injectable)(),
        __metadata("design:paramtypes", [])
    ], UserRepository);
    return UserRepository;
}());
exports.UserRepository = UserRepository;
