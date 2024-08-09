"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messages = void 0;
var _Chats = require("./../../../../chats/infra/typeorm/Entities/Chats");
var _typeorm = require("typeorm");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
let Messages = exports.Messages = (_dec = (0, _typeorm.Entity)({
  name: 'messages'
}), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)(), _dec3 = Reflect.metadata("design:type", Number), _dec4 = (0, _typeorm.Column)('varchar'), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.ManyToOne)(() => _Chats.Chats, chats => chats.message, {
  onDelete: "CASCADE"
}), _dec7 = (0, _typeorm.JoinColumn)({
  name: 'chatId'
}), _dec8 = Reflect.metadata("design:type", typeof _Chats.Chats === "undefined" ? Object : _Chats.Chats), _dec9 = (0, _typeorm.Column)('varchar', {
  nullable: true
}), _dec10 = Reflect.metadata("design:type", String), _dec11 = (0, _typeorm.Column)('varchar', {
  nullable: true
}), _dec12 = Reflect.metadata("design:type", String), _dec13 = (0, _typeorm.Column)('varchar'), _dec14 = Reflect.metadata("design:type", String), _dec15 = (0, _typeorm.Column)('varchar', {
  nullable: true
}), _dec16 = Reflect.metadata("design:type", String), _dec17 = (0, _typeorm.Column)('varchar'), _dec18 = Reflect.metadata("design:type", String), _dec19 = (0, _typeorm.Column)('boolean', {
  nullable: true
}), _dec20 = Reflect.metadata("design:type", Boolean), _dec21 = (0, _typeorm.Column)('varchar'), _dec22 = Reflect.metadata("design:type", String), _dec23 = (0, _typeorm.CreateDateColumn)(), _dec24 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec25 = (0, _typeorm.UpdateDateColumn)(), _dec26 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = (_class2 = class Messages {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "userType", _descriptor2, this);
    _initializerDefineProperty(this, "chatId", _descriptor3, this);
    _initializerDefineProperty(this, "projectId", _descriptor4, this);
    _initializerDefineProperty(this, "supportId", _descriptor5, this);
    _initializerDefineProperty(this, "messageType", _descriptor6, this);
    _initializerDefineProperty(this, "urlImage", _descriptor7, this);
    _initializerDefineProperty(this, "messages", _descriptor8, this);
    _initializerDefineProperty(this, "msgEdt", _descriptor9, this);
    _initializerDefineProperty(this, "origin", _descriptor10, this);
    _initializerDefineProperty(this, "createdAt", _descriptor11, this);
    _initializerDefineProperty(this, "updatedAt", _descriptor12, this);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "userType", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "chatId", [_dec6, _dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "projectId", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "supportId", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "messageType", [_dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "urlImage", [_dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "messages", [_dec17, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "msgEdt", [_dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "origin", [_dec21, _dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec23, _dec24], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "updatedAt", [_dec25, _dec26], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);