"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoteRepository = void 0;
var _appDataSource = require("../../../../../main/infra/typeorm/connection/app-data-source");
var _Notes = require("../Entities/Notes");
var _AppError = require("../../../../../error/AppError");
//implements INoteRepository
class NoteRepository {
  constructor() {
    this.repositoryNotes = void 0;
    this.repositoryNotes = _appDataSource.myDataSource.getRepository(_Notes.Notes);
  }
  async getAllNotesSupportID(chatId) {
    const notesSupport = await this.repositoryNotes.find({
      where: {
        chatId
      }
    });
    return notesSupport;
  }
  async getOneNote(id) {
    const getNote = await this.repositoryNotes.findOneBy({
      id
    });
    if (!getNote) {
      throw new _AppError.AppError('Note not found');
    }
    return getNote;
  }
  async deleteNote(id) {
    const getNote = await this.repositoryNotes.findOneBy({
      id
    });
    if (!getNote) {
      throw new _AppError.AppError('Note not found');
    }
    await this.repositoryNotes.delete({
      id
    });
    return "Note deleted successfully";
  }
  async updateNote(id, note) {
    const getNote = await this.repositoryNotes.findOneBy({
      id
    });
    if (!getNote) {
      throw new _AppError.AppError('Note not found');
    }
    getNote.note = note;
    const noteUpdaded = await this.repositoryNotes.save(getNote);
    return noteUpdaded;
  }
  async createNote(infochat) {
    const {
      supportId,
      chatId,
      note
    } = await infochat;
    const createNote = await this.repositoryNotes.create({
      supportId,
      chatId,
      note
    });
    const noteCreated = await this.repositoryNotes.save(createNote);
    return noteCreated;
  }
}
exports.NoteRepository = NoteRepository;