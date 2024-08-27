"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddColumnImageInMessage1721646188992 = void 0;
var _typeorm = require("typeorm");
class AddColumnImageInMessage1721646188992 {
  async up(queryRunner) {
    await queryRunner.addColumns("messages", [new _typeorm.TableColumn({
      name: "urImage",
      type: "varchar",
      isNullable: true // ou false dependendo do seu caso
    })]);
  }
  async down(queryRunner) {
    await queryRunner.dropColumn('messages', 'urImage');
  }
}
exports.AddColumnImageInMessage1721646188992 = AddColumnImageInMessage1721646188992;