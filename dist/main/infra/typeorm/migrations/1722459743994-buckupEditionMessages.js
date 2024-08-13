"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BuckupEditionMessages1722459743994 = void 0;
var _typeorm = require("typeorm");
class BuckupEditionMessages1722459743994 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "buckupEditionMessage",
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'messageId',
        type: 'int'
      }, {
        name: 'action',
        type: 'varchar'
      }, {
        name: 'message',
        type: 'varchar'
      }, {
        name: "createdAt",
        type: "timestamp",
        default: "now()"
      }, {
        name: "updatedAt",
        type: "timestamp",
        default: "now()"
      }]
    }));
    await queryRunner.createForeignKey('buckupEditionMessage', new _typeorm.TableForeignKey({
      columnNames: ["messageId"],
      referencedColumnNames: ["id"],
      referencedTableName: "messages",
      onDelete: "CASCADE"
    }));
  }
  async down(queryRunner) {
    const table = await queryRunner.getTable("buckupEditionMessage");
    const foreignKey = table?.foreignKeys.find(fk => fk.columnNames.indexOf("messageId") !== -1);
    if (foreignKey) {
      await queryRunner.dropForeignKey("buckupEditionMessage", foreignKey);
    }
    await queryRunner.dropTable("buckupEditionMessage");
  }
}
exports.BuckupEditionMessages1722459743994 = BuckupEditionMessages1722459743994;