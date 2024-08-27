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
exports.Notes = void 0;
var typeorm_1 = require("typeorm");
var Notes = /** @class */ (function () {
    function Notes() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Notes.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar', { nullable: true }),
        __metadata("design:type", String)
    ], Notes.prototype, "supportId", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar', { nullable: true }),
        __metadata("design:type", String)
    ], Notes.prototype, "note", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar'),
        __metadata("design:type", String)
    ], Notes.prototype, "chatId", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Notes.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Notes.prototype, "updatedAt", void 0);
    Notes = __decorate([
        (0, typeorm_1.Entity)({ name: 'notes' })
    ], Notes);
    return Notes;
}());
exports.Notes = Notes;
