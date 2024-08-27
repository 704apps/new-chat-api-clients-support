"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlterColumnImageInMessage1721670088463 = void 0;
class AlterColumnImageInMessage1721670088463 {
  async up(queryRunner) {
    await queryRunner.renameColumn('messages', 'urImage', 'urlImage');
  }
  async down(queryRunner) {
    await queryRunner.renameColumn('messages', 'urlImage', 'urImage');
  }
}
exports.AlterColumnImageInMessage1721670088463 = AlterColumnImageInMessage1721670088463;