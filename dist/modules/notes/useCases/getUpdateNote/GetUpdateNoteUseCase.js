"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetUpdateNoteUseCase = void 0;
var _AppError = require("../../../../error/AppError");
var _tsyringe = require("tsyringe");
var _INoteRepositories = require("../../../notes/repositories/INoteRepositories");
var _dec, _dec2, _dec3, _dec4, _class;
let GetUpdateNoteUseCase = exports.GetUpdateNoteUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("NoteRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _INoteRepositories.INoteRepository === "undefined" ? Object : _INoteRepositories.INoteRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class GetUpdateNoteUseCase {
  constructor(noteRepository) {
    this.noteRepository = noteRepository;
  }
  async getUpdateNote(id, note) {
    try {
      const getUpdateNoteUseCase = await this.noteRepository.updateNote(id, note);
      return getUpdateNoteUseCase;
    } catch (error) {
      throw new _AppError.AppError('Error when update chat!', 400, {
        error
      });
    }
  }
}) || _class) || _class) || _class) || _class);