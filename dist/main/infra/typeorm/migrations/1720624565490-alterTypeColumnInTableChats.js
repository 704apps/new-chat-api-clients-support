"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlterTypeColumnInTableChats1720624565490 = void 0;
var _typeorm = require("typeorm");
class AlterTypeColumnInTableChats1720624565490 {
  async up(queryRunner) {
    await queryRunner.addColumn('chats', new _typeorm.TableColumn({
      name: 'dateIndex',
      type: 'timestamp',
      isNullable: true
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropColumn('chats', 'dateIndex');
  }
}
exports.AlterTypeColumnInTableChats1720624565490 = AlterTypeColumnInTableChats1720624565490;