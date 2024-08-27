"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableRefreshToken1721912434794 = void 0;
var _typeorm = require("typeorm");
class CreateTableRefreshToken1721912434794 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "refreshToken",
      columns: [{
        name: 'id',
        type: 'varchar',
        isPrimary: true,
        isNullable: false,
        generationStrategy: 'uuid'
      }, {
        name: 'expiriesIn',
        type: 'int'
      }, {
        name: 'userId',
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
    await queryRunner.createForeignKey('refreshToken', new _typeorm.TableForeignKey({
      columnNames: ["userId"],
      referencedColumnNames: ["id"],
      referencedTableName: "users",
      onDelete: "CASCADE"
    }));
  }
  async down(queryRunner) {
    const table = await queryRunner.getTable("refreshToken");
    const foreignKey = table?.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1);
    if (foreignKey) {
      await queryRunner.dropForeignKey("refreshToken", foreignKey);
    }
    await queryRunner.dropTable("refreshToken");
  }
}
exports.CreateTableRefreshToken1721912434794 = CreateTableRefreshToken1721912434794;