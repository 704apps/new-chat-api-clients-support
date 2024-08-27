"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddColumnMsgEditInTableMessages1720543978135 = void 0;
var _typeorm = require("typeorm");
class AddColumnMsgEditInTableMessages1720543978135 {
  async up(queryRunner) {
    await queryRunner.addColumn('messages', new _typeorm.TableColumn({
      name: 'msgEdit',
      type: 'boolean',
      isNullable: true
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropColumn('messages', 'msgEdit');
  }
}
exports.AddColumnMsgEditInTableMessages1720543978135 = AddColumnMsgEditInTableMessages1720543978135;