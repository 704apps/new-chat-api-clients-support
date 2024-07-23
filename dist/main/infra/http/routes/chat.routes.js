"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRouter = void 0;
const express_1 = require("express");
const chats_controller_1 = require("../../../../modules/chats/chats.controller");
const chatRouter = (0, express_1.Router)();
exports.chatRouter = chatRouter;
const chatController = new chats_controller_1.ChatController();
chatRouter.post('/create_chat/', (req, res) => chatController.getCreateChat(req, res));
// chatRouter.patch('/update_statusAttention/:id',(req,res)=>chatController.getUpdateStatusAttention(req,res))
chatRouter.patch('/update_statusFinished/:id', (req, res) => chatController.updateStatusFinished(req, res));
chatRouter.patch('/update_statusOpen/:id', (req, res) => chatController.updateStatusOpen(req, res));
