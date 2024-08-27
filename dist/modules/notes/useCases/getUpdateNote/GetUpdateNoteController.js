"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetUpdateNoteController = void 0;
var _GetUpdateNoteUseCase = require("./GetUpdateNoteUseCase");
var _tsyringe = require("tsyringe");
class GetUpdateNoteController {
  async handle(request, response) {
    try {
      const idChat = request.params.id;
      const {
        note
      } = request.body;
      const getUpdateNoteUseCase = _tsyringe.container.resolve(_GetUpdateNoteUseCase.GetUpdateNoteUseCase);
      const noteUpdate = await getUpdateNoteUseCase.getUpdateNote(idChat, String(note));
      return response.status(200).json(noteUpdate);
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.GetUpdateNoteController = GetUpdateNoteController;