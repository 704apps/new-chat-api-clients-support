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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefleshToken = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("@modules/accounts/infra/typeorm/Entities/Users");
let RefleshToken = class RefleshToken {
};
exports.RefleshToken = RefleshToken;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RefleshToken.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], RefleshToken.prototype, "expiriesIn", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], RefleshToken.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, user => user.refleshtoken, { onDelete: 'CASCADE' }),
    __metadata("design:type", Users_1.Users)
], RefleshToken.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RefleshToken.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RefleshToken.prototype, "updatedAt", void 0);
exports.RefleshToken = RefleshToken = __decorate([
    (0, typeorm_1.Entity)({ name: 'refleshToken' })
], RefleshToken);
