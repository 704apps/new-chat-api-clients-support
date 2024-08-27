"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddColumnAvatarInTableUser1724333813461 = void 0;
var _typeorm = require("typeorm");
class AddColumnAvatarInTableUser1724333813461 {
  async up(queryRunner) {
    await queryRunner.addColumn('users', new _typeorm.TableColumn({
      name: 'avatar',
      type: 'varchar',
      isNullable: true
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropColumn('users', 'avatar');
  }
}
exports.AddColumnAvatarInTableUser1724333813461 = AddColumnAvatarInTableUser1724333813461;