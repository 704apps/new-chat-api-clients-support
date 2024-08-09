"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messages1719582222042 = void 0;
var _typeorm = require("typeorm");
class Messages1719582222042 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "messages",
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: "userType",
        type: "varchar"
      }, {
        name: "socketId",
        type: "varchar"
      }, {
        name: "messageType",
        type: "varchar"
      }, {
        name: "messages",
        type: "varchar"
      }, {
        name: "orige",
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
    await queryRunner.dropTable("messages");
  }
}
exports.Messages1719582222042 = Messages1719582222042;