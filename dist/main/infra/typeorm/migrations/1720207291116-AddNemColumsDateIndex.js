"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddNemColumsDateIndex1720207291116 = void 0;
var _typeorm = require("typeorm");
class AddNemColumsDateIndex1720207291116 {
  async up(queryRunner) {
    await queryRunner.addColumn('messages', new _typeorm.TableColumn({
      name: 'dateIndex',
      type: 'date',
      isNullable: true
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropColumn('messages', 'dateIndex');
  }
}
exports.AddNemColumsDateIndex1720207291116 = AddNemColumsDateIndex1720207291116;