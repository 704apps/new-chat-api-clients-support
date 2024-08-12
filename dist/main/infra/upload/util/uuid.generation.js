"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uuidGeneration = uuidGeneration;
var _uuid = require("uuid");
function uuidGeneration() {
  const uuid = (0, _uuid.v4)();
  return uuid;
}