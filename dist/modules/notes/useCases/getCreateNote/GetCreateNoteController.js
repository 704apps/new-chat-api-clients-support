"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetCreateNoteController = void 0;
var _GetCreateNoteUseCase = require("./GetCreateNoteUseCase");
var _tsyringe = require("tsyringe");
class GetCreateNoteController {
  async handle(request, response) {
    try {
      const dataForNoteCreation = request.body;
      const getCreateNoteUseCase = _tsyringe.container.resolve(_GetCreateNoteUseCase.GetCreateNoteUseCase);
      const note = await getCreateNoteUseCase.getCreateNote(dataForNoteCreation);
      return response.status(200).json(note);
    } catch (error) {
      //  console.log(error)
      return response.status(400).json({
        error
      });
    }
  }
}
exports.GetCreateNoteController = GetCreateNoteController;