"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddColumnSupportIdInTableMessages1724444755187 = void 0;
var _typeorm = require("typeorm");
class AddColumnSupportIdInTableMessages1724444755187 {
  async up(queryRunner) {
    await queryRunner.addColumn('oldMessage', new _typeorm.TableColumn({
      name: 'supportId',
      type: 'varchar',
      isNullable: true
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropColumn('oldMessage', 'supportId');
  }
}
exports.AddColumnSupportIdInTableMessages1724444755187 = AddColumnSupportIdInTableMessages1724444755187;