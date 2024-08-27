"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableNote1723829032766 = void 0;
var _typeorm = require("typeorm");
class CreateTableNote1723829032766 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "notes",
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: "supportId",
        type: "varchar"
      }, {
        name: "note",
        type: "varchar"
      }, {
        name: "chatId",
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
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable("notes");
  }
}
exports.CreateTableNote1723829032766 = CreateTableNote1723829032766;