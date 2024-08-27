"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableHistoryMessageUpdate1724242149216 = void 0;
var _typeorm = require("typeorm");
class CreateTableHistoryMessageUpdate1724242149216 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "oldMessage",
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: "idMessage",
        type: "int"
      }, {
        name: "oldMessage",
        type: "varchar"
      }, {
        name: "createdAt",
        type: "timestamp",
        default: "now()"
      }, {
        name: "updatedAt",
        type: "timestamp",
        default: "now()"
      }]
    })), await queryRunner.createForeignKey('oldMessage', new _typeorm.TableForeignKey({
      columnNames: ['idMessage'],
      referencedColumnNames: ['id'],
      referencedTableName: 'messages',
      onDelete: 'CASCADE'
    }));
  }
  async down(queryRunner) {
    const table = await queryRunner.getTable('oldMessage');
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('idMessage') !== -1);
    await queryRunner.dropForeignKey('oldMessage', foreignKey);
  }
}
exports.CreateTableHistoryMessageUpdate1724242149216 = CreateTableHistoryMessageUpdate1724242149216;