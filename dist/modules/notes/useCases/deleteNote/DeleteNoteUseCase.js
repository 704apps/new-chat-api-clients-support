"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteNoteUseCase = void 0;
var _INoteRepositories = require("../../repositories/INoteRepositories");
var _AppError = require("../../../../error/AppError");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let DeleteNoteUseCase = exports.DeleteNoteUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("NoteRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _INoteRepositories.INoteRepository === "undefined" ? Object : _INoteRepositories.INoteRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteNoteUseCase {
  constructor(noteRepository) {
    this.noteRepository = noteRepository;
  }
  async getNoteDelete(id) {
    try {
      const noteDelete = await this.noteRepository.deleteNote(id);
      return noteDelete;
    } catch (error) {
      throw new _AppError.AppError('Error when update Note!', 400, {
        error
      });
    }
  }
}) || _class) || _class) || _class) || _class);