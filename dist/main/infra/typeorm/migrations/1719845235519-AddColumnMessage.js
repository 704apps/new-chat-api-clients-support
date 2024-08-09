"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddColumnMessage1719845235519 = void 0;
var _typeorm = require("typeorm");
class AddColumnMessage1719845235519 {
  async up(queryRunner) {
    await queryRunner.addColumn('messages', new _typeorm.TableColumn({
      name: 'projectId',
      type: 'varchar',
      isNullable: true
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropColumn('messages', 'projectId');
  }
}
exports.AddColumnMessage1719845235519 = AddColumnMessage1719845235519;