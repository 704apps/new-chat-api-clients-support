"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
require("reflect-metadata");
var express_1 = require("express");
var chat_routes_1 = require("./chat.routes");
var message_routes_1 = require("./message.routes");
var authenticate_routes_1 = require("./authenticate.routes");
var router = (0, express_1.Router)();
exports.router = router;
router.use("/chat", message_routes_1.messageRoutes, chat_routes_1.chatRouter, authenticate_routes_1.autheticateRoutes);
//# sourceMappingURL=index.js.map