"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddFkMessage1723146324379 = void 0;
var _typeorm = require("typeorm");
class AddFkMessage1723146324379 {
  async up(queryRunner) {
    await queryRunner.createForeignKey('messages', new _typeorm.TableForeignKey({
      columnNames: ['chatId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'chats',
      onDelete: 'CASCADE'
    }));
  }
  async down(queryRunner) {
    const table = await queryRunner.getTable('messages');
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('chatId') !== -1);
    await queryRunner.dropForeignKey('messages', foreignKey);
  }
}
exports.AddFkMessage1723146324379 = AddFkMessage1723146324379;