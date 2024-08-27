"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddColumnActiveUser1724260650471 = void 0;
var _typeorm = require("typeorm");
class AddColumnActiveUser1724260650471 {
  async up(queryRunner) {
    await queryRunner.addColumn('users', new _typeorm.TableColumn({
      name: 'active',
      type: 'boolean',
      isNullable: false
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropColumn('users', 'active');
  }
}
exports.AddColumnActiveUser1724260650471 = AddColumnActiveUser1724260650471;