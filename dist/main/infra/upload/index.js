"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = void 0;
exports.upload2 = upload2;
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//import {storage} from './multerConfig'
async function upload2() {
  const upload = (0, _multer.default)({
    dest: 'uploads/'
  });
}
const storage = _multer.default.memoryStorage();
const upload = exports.upload = (0, _multer.default)({
  storage
});