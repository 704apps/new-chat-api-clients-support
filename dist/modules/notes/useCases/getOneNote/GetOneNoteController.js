"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetOneNoteController = void 0;
var _GetOneNoteUseCase = require("./GetOneNoteUseCase");
var _tsyringe = require("tsyringe");
class GetOneNoteController {
  async handle(request, response) {
    try {
      const idNote = request.params.id;
      const getOneNoteUseCase = _tsyringe.container.resolve(_GetOneNoteUseCase.GetOneNoteUseCase);
      const note = await getOneNoteUseCase.getOneNote(Number(idNote));
      return response.status(200).json(note);
    } catch (error) {
      // console.log(error)

      return response.status(400).json({
        error
      });
    }
  }
}
exports.GetOneNoteController = GetOneNoteController;