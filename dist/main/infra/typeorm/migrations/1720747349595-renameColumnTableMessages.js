"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenameColumnTableMessages1720747349595 = void 0;
class RenameColumnTableMessages1720747349595 {
  async up(queryRunner) {
    await queryRunner.renameColumn('messages', 'orige', 'origin');
  }
  async down(queryRunner) {
    await queryRunner.renameColumn('messages', 'origin', 'orige');
  }
}
exports.RenameColumnTableMessages1720747349595 = RenameColumnTableMessages1720747349595;