"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chats = void 0;
var _typeorm = require("typeorm");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
let Chats = exports.Chats = (_dec = (0, _typeorm.Entity)({
  name: 'chats'
}), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)(), _dec3 = Reflect.metadata("design:type", Number), _dec4 = (0, _typeorm.Column)('varchar', {
  nullable: true
}), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.Column)('varchar'), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.Column)('varchar', {
  nullable: true
}), _dec9 = Reflect.metadata("design:type", String), _dec10 = (0, _typeorm.Column)('date'), _dec11 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec12 = (0, _typeorm.CreateDateColumn)(), _dec13 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec14 = (0, _typeorm.UpdateDateColumn)(), _dec15 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = (_class2 = class Chats {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "supportId", _descriptor2, this);
    _initializerDefineProperty(this, "projectId", _descriptor3, this);
    // supportId projectId statusAttention dateIndex
    _initializerDefineProperty(this, "statusAttention", _descriptor4, this);
    // @OneToMany(()=>Messages,message=>message.chatId)
    // message: Messages[]
    _initializerDefineProperty(this, "dateIndex", _descriptor5, this);
    _initializerDefineProperty(this, "createdAt", _descriptor6, this);
    _initializerDefineProperty(this, "updatedAt", _descriptor7, this);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "supportId", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "projectId", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "statusAttention", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "dateIndex", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "updatedAt", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);