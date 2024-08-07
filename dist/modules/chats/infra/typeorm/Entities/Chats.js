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
exports.Chats = void 0;
var typeorm_1 = require("typeorm");
var Chats = /** @class */ (function () {
    function Chats() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Chats.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar', { nullable: true }),
        __metadata("design:type", String)
    ], Chats.prototype, "supportId", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", String)
    ], Chats.prototype, "projectId", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar', { nullable: true }),
        __metadata("design:type", String)
    ], Chats.prototype, "statusAttention", void 0);
    __decorate([
        (0, typeorm_1.Column)('date'),
        __metadata("design:type", Date)
    ], Chats.prototype, "dateIndex", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Chats.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Chats.prototype, "updatedAt", void 0);
    Chats = __decorate([
        (0, typeorm_1.Entity)({ name: 'chats' })
    ], Chats);
    return Chats;
}());
exports.Chats = Chats;
//# sourceMappingURL=Chats.js.map