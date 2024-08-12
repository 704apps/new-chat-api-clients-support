"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenameColmunChatsContacId1720568799031 = void 0;
class RenameColmunChatsContacId1720568799031 {
  async up(queryRunner) {
    await queryRunner.renameColumn('chats', 'contactId', 'projectId');
  }
  async down(queryRunner) {
    await queryRunner.renameColumn('chats', 'projectId', 'contactId');
  }
}
exports.RenameColmunChatsContacId1720568799031 = RenameColmunChatsContacId1720568799031;