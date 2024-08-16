"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteRouter = void 0;
var express_1 = require("express");
var GetCreateNoteController_1 = require("../../../../modules/notes/useCases/getCreateNote/GetCreateNoteController");
var GetUpdateNoteController_1 = require("../../../../modules/notes/useCases/getUpdateNote/GetUpdateNoteController");
var DeleteNoteController_1 = require("../../../../modules/notes/useCases/deleteNote/DeleteNoteController");
var GetOneNoteController_1 = require("../../../../modules/notes/useCases/getOneNote/GetOneNoteController");
var noteRouter = (0, express_1.Router)();
exports.noteRouter = noteRouter;
var getCreateNoteController = new GetCreateNoteController_1.GetCreateNoteController();
var getUpdateNoteController = new GetUpdateNoteController_1.GetUpdateNoteController();
var deleteNoteController = new DeleteNoteController_1.DeleteNoteController();
var getOneNoteController = new GetOneNoteController_1.GetOneNoteController();
//chatRouter.use(ensureAuthenticated)
noteRouter.post('/create_note/', getCreateNoteController.handle);
noteRouter.get('/get_note/:id', getOneNoteController.handle);
noteRouter.patch('/edit_note/:id', getUpdateNoteController.handle);
noteRouter.delete('/delete_note/:id', deleteNoteController.handle);
