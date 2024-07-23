"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuidGeneration = uuidGeneration;
const uuid_1 = require("uuid");
function uuidGeneration() {
    const uuid = (0, uuid_1.v4)();
    return uuid;
}
