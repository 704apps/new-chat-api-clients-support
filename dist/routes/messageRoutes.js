"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messageController_1 = require("../controllers/messageController/messageController");
const router = (0, express_1.Router)();
const messageController = new messageController_1.MessageController();
router.get('/messages', (req, res) => messageController.getMessages(req, res));
exports.default = router;
