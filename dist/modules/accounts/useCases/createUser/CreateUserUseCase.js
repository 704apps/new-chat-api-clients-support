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
exports.CreateUserUseCase = void 0;
require("reflect-metadata");
var tsyringe_1 = require("tsyringe");
var bcrypt_1 = require("bcrypt");
var AppError_1 = require("../../../../error/AppError");
var CreateUserUseCase = /** @class */ (function () {
    function CreateUserUseCase(userRepository) {
        this.userRepository = userRepository;
    }
    CreateUserUseCase.prototype.execute = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var passwordHash, isuseralreadyExist, user, userCreated, error_1;
            var name = _b.name, email = _b.email, password = _b.password;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 4, , 5]);
                        console.log('a senha é ' + password);
                        return [4 /*yield*/, (0, bcrypt_1.hash)(password, 8)];
                    case 1:
                        passwordHash = _c.sent();
                        console.log('veio no antes de ver email' + passwordHash);
                        return [4 /*yield*/, this.userRepository.findByEmail(email)];
                    case 2:
                        isuseralreadyExist = _c.sent();
                        console.log('veio no depois de ver email');
                        if (isuseralreadyExist) {
                            throw new AppError_1.AppError("User already exists");
                        }
                        console.log('veio no antes de salvar');
                        return [4 /*yield*/, this.userRepository.create({
                                name: name,
                                email: email,
                                password: passwordHash,
                            })];
                    case 3:
                        user = _c.sent();
                        userCreated = {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        };
                        return [2 /*return*/, userCreated];
                    case 4:
                        error_1 = _c.sent();
                        console.log(error_1);
                        throw new AppError_1.AppError('Error creating user', 400, { error: error_1 });
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CreateUserUseCase = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("UserRepository")),
        __metadata("design:paramtypes", [Object])
    ], CreateUserUseCase);
    return CreateUserUseCase;
}());
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=CreateUserUseCase.js.map