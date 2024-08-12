"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshToken = void 0;
var _Users = require("../../../../../modules/accounts/infra/typeorm/Entities/Users");
var _typeorm = require("typeorm");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
let RefreshToken = exports.RefreshToken = (_dec = (0, _typeorm.Entity)({
  name: 'refreshToken'
}), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.Column)('int'), _dec5 = Reflect.metadata("design:type", Number), _dec6 = (0, _typeorm.ManyToOne)(() => _Users.Users, userId => userId.id, {
  onDelete: "CASCADE"
}), _dec7 = (0, _typeorm.JoinColumn)({
  name: 'userId'
}), _dec8 = Reflect.metadata("design:type", typeof _Users.Users === "undefined" ? Object : _Users.Users), _dec9 = (0, _typeorm.CreateDateColumn)(), _dec10 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec11 = (0, _typeorm.UpdateDateColumn)(), _dec12 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = (_class2 = class RefreshToken {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "expiriesIn", _descriptor2, this);
    // @Column('varchar')
    // userId: string;
    _initializerDefineProperty(this, "userId", _descriptor3, this);
    _initializerDefineProperty(this, "createdAt", _descriptor4, this);
    _initializerDefineProperty(this, "updatedAt", _descriptor5, this);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "expiriesIn", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "userId", [_dec6, _dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "updatedAt", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);