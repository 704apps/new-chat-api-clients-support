"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuidGeneration = uuidGeneration;
var uuid_1 = require("uuid");
function uuidGeneration() {
    var uuid = (0, uuid_1.v4)();
    return uuid;
}
