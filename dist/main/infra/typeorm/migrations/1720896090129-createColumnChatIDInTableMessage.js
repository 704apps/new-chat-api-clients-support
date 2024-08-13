"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateColumnChatIDInTableMessage1720896090129 = void 0;
var _typeorm = require("typeorm");
class CreateColumnChatIDInTableMessage1720896090129 {
  async up(queryRunner) {
    await queryRunner.changeColumn("messages", "chatId", new _typeorm.TableColumn({
      name: "chatId",
      type: "int",
      isNullable: true // ou false dependendo do seu caso
    }));
  }
  async down(queryRunner) {
    queryRunner.dropColumn("messages", "chatId");
  }
}
exports.CreateColumnChatIDInTableMessage1720896090129 = CreateColumnChatIDInTableMessage1720896090129;