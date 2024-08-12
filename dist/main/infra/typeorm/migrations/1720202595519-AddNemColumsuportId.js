"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddNemColumsuportId1720202595519 = void 0;
var _typeorm = require("typeorm");
class AddNemColumsuportId1720202595519 {
  async up(queryRunner) {
    await queryRunner.addColumn('messages', new _typeorm.TableColumn({
      name: 'supportId',
      type: 'varchar',
      isNullable: true
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropColumn('messages', 'supportId');
  }
}
exports.AddNemColumsuportId1720202595519 = AddNemColumsuportId1720202595519;