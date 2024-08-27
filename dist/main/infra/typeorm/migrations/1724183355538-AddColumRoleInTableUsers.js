"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddColumRoleInTableUsers1724183355538 = void 0;
var _typeorm = require("typeorm");
class AddColumRoleInTableUsers1724183355538 {
  async up(queryRunner) {
    await queryRunner.addColumn('users', new _typeorm.TableColumn({
      name: 'role',
      type: 'varchar',
      isNullable: false
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropColumn('users', 'role');
  }
}
exports.AddColumRoleInTableUsers1724183355538 = AddColumRoleInTableUsers1724183355538;