"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var uuid_generation_1 = require("./util/uuid.generation");
exports.storage = multer_1.default.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path_1.default.resolve("src", "tmp"));
    },
    filename: function (req, file, callback) {
        var uuid = (0, uuid_generation_1.uuidGeneration)();
        callback(null, "".concat(uuid, "_").concat(file.originalname));
    }
});
//# sourceMappingURL=multerConfig.js.map