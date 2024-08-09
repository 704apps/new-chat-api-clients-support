"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
require("reflect-metadata");
var _express = require("express");
var _chat = require("./chat.routes");
var _message = require("./message.routes");
var _authenticate = require("./authenticate.routes");
const router = exports.router = (0, _express.Router)();
router.use("/chat", _message.messageRoutes, _chat.chatRouter, _authenticate.autheticateRoutes);