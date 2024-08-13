"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRouter = void 0;
var express_1 = require("express");
var GetCreateChatController_1 = require("../../../../modules/chats/useCases/getCreateChat/GetCreateChatController");
var UpdateStatusFinishedController_1 = require("../../../../modules/chats/useCases/updateStatusFinished/UpdateStatusFinishedController");
var UpdateStatusOpenController_1 = require("../../../../modules/chats/useCases/updateStatusOpen/UpdateStatusOpenController");
var chatRouter = (0, express_1.Router)();
exports.chatRouter = chatRouter;
var getCreateChatController = new GetCreateChatController_1.GetCreateChatController();
var updateStatusFinishedController = new UpdateStatusFinishedController_1.UpdateStatusFinishedController();
var updateStatusOpenController = new UpdateStatusOpenController_1.UpdateStatusOpenController();
//chatRouter.use(ensureAuthenticated)
chatRouter.post('/create_chat/', getCreateChatController.handle);
// chatRouter.patch('/update_statusAttention/:id',(req,res)=>chatController.getUpdateStatusAttention(req,res))
chatRouter.patch('/update_statusFinished/:id', updateStatusFinishedController.handle);
chatRouter.patch('/update_statusOpen/:id', updateStatusOpenController.handle);
