"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteNoteController = void 0;
var _DeleteNoteUseCase = require("./DeleteNoteUseCase");
var _tsyringe = require("tsyringe");
class DeleteNoteController {
  async handle(request, response) {
    try {
      const idNote = request.params.id;
      const deleteNoteUseCase = await _tsyringe.container.resolve(_DeleteNoteUseCase.DeleteNoteUseCase);
      const deleteNote = await deleteNoteUseCase.getNoteDelete(idNote);
      return response.status(200).json(deleteNote);
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.DeleteNoteController = DeleteNoteController;