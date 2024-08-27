"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noteRouter = void 0;
var _express = require("express");
var _GetCreateNoteController = require("../../../../modules/notes/useCases/getCreateNote/GetCreateNoteController");
var _GetUpdateNoteController = require("../../../../modules/notes/useCases/getUpdateNote/GetUpdateNoteController");
var _DeleteNoteController = require("../../../../modules/notes/useCases/deleteNote/DeleteNoteController");
var _GetOneNoteController = require("../../../../modules/notes/useCases/getOneNote/GetOneNoteController");
var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");
var _GetAllNoteChatController = require("../../../../modules/notes/useCases/getAllNoteChat/GetAllNoteChatController");
const noteRouter = exports.noteRouter = (0, _express.Router)();
const getCreateNoteController = new _GetCreateNoteController.GetCreateNoteController();
const getUpdateNoteController = new _GetUpdateNoteController.GetUpdateNoteController();
const deleteNoteController = new _DeleteNoteController.DeleteNoteController();
const getOneNoteController = new _GetOneNoteController.GetOneNoteController();
const getAllNoteChatController = new _GetAllNoteChatController.GetAllNoteChatController();

//chatRouter.use(ensureAuthenticated)
noteRouter.post('/create_note/', _ensureAuthenticated.ensureAuthenticated, getCreateNoteController.handle);
noteRouter.get('/get_note/:id', _ensureAuthenticated.ensureAuthenticated, getOneNoteController.handle);
noteRouter.patch('/edit_note/:id', _ensureAuthenticated.ensureAuthenticated, getUpdateNoteController.handle);
noteRouter.delete('/delete_note/:id', _ensureAuthenticated.ensureAuthenticated, deleteNoteController.handle);
noteRouter.get('/notes/:id', _ensureAuthenticated.ensureAuthenticated, getAllNoteChatController.handle);

// chatRouter.patch('/update_statusAttention/:id',(req,res)=>chatController.getUpdateStatusAttention(req,res))