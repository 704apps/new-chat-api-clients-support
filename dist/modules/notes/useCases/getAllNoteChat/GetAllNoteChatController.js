"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllNoteChatController = void 0;
var _GetAllNoteChatUseCase = require("./GetAllNoteChatUseCase");
var _tsyringe = require("tsyringe");
class GetAllNoteChatController {
  async handle(request, response) {
    try {
      const chatID = request.params.id;
      const getAllNoteChatUseCase = _tsyringe.container.resolve(_GetAllNoteChatUseCase.GetAllNoteChatUseCase);
      const notesChat = await getAllNoteChatUseCase.getAllNotesSupportID(chatID);
      return response.status(200).json(notesChat);
    } catch (error) {
      // console.log(error)

      return response.status(400).json({
        error
      });
    }
  }
}
exports.GetAllNoteChatController = GetAllNoteChatController;