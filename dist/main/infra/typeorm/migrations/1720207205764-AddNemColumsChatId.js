"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddNemColumsChatId1720207205764 = void 0;
var _typeorm = require("typeorm");
class AddNemColumsChatId1720207205764 {
  async up(queryRunner) {
    await queryRunner.addColumn('messages', new _typeorm.TableColumn({
      name: 'chatId',
      type: 'varchar',
      isNullable: true
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropColumn('messages', 'chatId');
  }
}
exports.AddNemColumsChatId1720207205764 = AddNemColumsChatId1720207205764;