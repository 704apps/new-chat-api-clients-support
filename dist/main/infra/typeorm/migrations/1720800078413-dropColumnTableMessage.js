"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropColumnTableMessage1720800078413 = void 0;
var _typeorm = require("typeorm");
class DropColumnTableMessage1720800078413 {
  async up(queryRunner) {
    await queryRunner.dropColumn("messages", "socketId");
  }
  async down(queryRunner) {
    await queryRunner.addColumn("messages", new _typeorm.TableColumn({
      name: "socketId",
      type: "varchar"
      // Defina outros parâmetros da coluna, como nullable, default, etc.
    }));
  }
}
exports.DropColumnTableMessage1720800078413 = DropColumnTableMessage1720800078413;