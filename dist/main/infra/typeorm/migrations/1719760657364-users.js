"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users1719519137355 = void 0;
var _typeorm = require("typeorm");
class Users1719519137355 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "users",
      columns: [{
        name: 'id',
        type: 'varchar',
        isPrimary: true,
        isNullable: false,
        generationStrategy: 'uuid'
      }, {
        name: "name",
        type: "varchar"
      }, {
        name: "email",
        type: "varchar"
      }, {
        name: "password",
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
    await queryRunner.dropTable("users");
  }
}
exports.Users1719519137355 = Users1719519137355;