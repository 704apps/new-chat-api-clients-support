"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlterAmountCaractrsColumnMessgeTableMessages1720027095243 = void 0;
class AlterAmountCaractrsColumnMessgeTableMessages1720027095243 {
  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE messages MODIFY messages VARCHAR(2500)`);
  }
  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE messages MODIFY messages VARCHAR(250)`);
  }
}
exports.AlterAmountCaractrsColumnMessgeTableMessages1720027095243 = AlterAmountCaractrsColumnMessgeTableMessages1720027095243;