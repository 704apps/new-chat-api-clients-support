"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
var _uuid = require("./util/uuid.generation");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const storage = exports.storage = _multer.default.diskStorage({
  destination: (req, file, callback) => {
    callback(null, _path.default.resolve("src", "tmp"));
  },
  filename: (req, file, callback) => {
    const uuid = (0, _uuid.uuidGeneration)();
    callback(null, `${uuid}_${file.originalname}`);
  }
});