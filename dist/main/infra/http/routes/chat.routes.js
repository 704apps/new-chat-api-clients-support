"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chatRouter = void 0;
var _express = require("express");
var _GetCreateChatController = require("../../../../modules/chats/useCases/getCreateChat/GetCreateChatController");
var _UpdateStatusFinishedController = require("../../../../modules/chats/useCases/updateStatusFinished/UpdateStatusFinishedController");
var _UpdateStatusOpenController = require("../../../../modules/chats/useCases/updateStatusOpen/UpdateStatusOpenController");
var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const chatRouter = exports.chatRouter = (0, _express.Router)();
const getCreateChatController = new _GetCreateChatController.GetCreateChatController();
const updateStatusFinishedController = new _UpdateStatusFinishedController.UpdateStatusFinishedController();
const updateStatusOpenController = new _UpdateStatusOpenController.UpdateStatusOpenController();

//chatRouter.use(ensureAuthenticated)
chatRouter.post('/create_chat/', _ensureAuthenticated.ensureAuthenticated, getCreateChatController.handle);
// chatRouter.patch('/update_statusAttention/:id',(req,res)=>chatController.getUpdateStatusAttention(req,res))

chatRouter.patch('/update_statusFinished/:id', _ensureAuthenticated.ensureAuthenticated, updateStatusFinishedController.handle);
chatRouter.patch('/update_statusOpen/:id', _ensureAuthenticated.ensureAuthenticated, updateStatusOpenController.handle);