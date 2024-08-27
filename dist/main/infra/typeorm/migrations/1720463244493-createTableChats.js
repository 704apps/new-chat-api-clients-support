"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableChats1720463244493 = void 0;
var _typeorm = require("typeorm");
class CreateTableChats1720463244493 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "chats",
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
        name: "contactId",
        type: "varchar"
      }, {
        name: "statusAttention",
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
    await queryRunner.dropTable("chats");
  }
}
exports.CreateTableChats1720463244493 = CreateTableChats1720463244493;