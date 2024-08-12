"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contacts1719583106508 = void 0;
var _typeorm = require("typeorm");
class Contacts1719583106508 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "contacts",
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: "name",
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
    await queryRunner.dropTable("contacts");
  }
}
exports.Contacts1719583106508 = Contacts1719583106508;