"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddColumnOldMessageInTableMessages1724190872698 = void 0;
var _typeorm = require("typeorm");
class AddColumnOldMessageInTableMessages1724190872698 {
  async up(queryRunner) {
    await queryRunner.addColumn('messages', new _typeorm.TableColumn({
      name: 'oldMessages',
      type: 'text',
      length: "100000",
      isNullable: false
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropColumn('messages', 'oldMessage');
  }
}
exports.AddColumnOldMessageInTableMessages1724190872698 = AddColumnOldMessageInTableMessages1724190872698;