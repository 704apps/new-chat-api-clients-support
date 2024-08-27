"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddColumnInTableChats1720625898778 = void 0;
var _typeorm = require("typeorm");
class AddColumnInTableChats1720625898778 {
  async up(queryRunner) {
    await queryRunner.addColumn('chats', new _typeorm.TableColumn({
      name: 'necessary',
      type: 'varchar',
      isNullable: true
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropColumn('chats', 'dateIndex');
  }
}
exports.AddColumnInTableChats1720625898778 = AddColumnInTableChats1720625898778;