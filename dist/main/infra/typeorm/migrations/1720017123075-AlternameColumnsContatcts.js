"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlternameColumnsContatcts1720017123075 = void 0;
class AlternameColumnsContatcts1720017123075 {
  async up(queryRunner) {
    await queryRunner.renameColumn('contacts', 'name', 'projectId');
  }
  async down(queryRunner) {
    await queryRunner.renameColumn('contacts', 'projectId', 'name');
  }
}
exports.AlternameColumnsContatcts1720017123075 = AlternameColumnsContatcts1720017123075;