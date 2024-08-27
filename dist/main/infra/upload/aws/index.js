"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToAws = uploadToAws;
var client_s3_1 = require("@aws-sdk/client-s3");
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
var path_1 = __importDefault(require("path"));
var uuid_generation_1 = require("../util/uuid.generation");
function uploadToAws(Key, Body) {
    return __awaiter(this, void 0, void 0, function () {
        var region, Bucket, s3Client, fileExtesnsion, name_uuid, data, command, url, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    region = process.env.AWS_REGION;
                    Bucket = String(process.env.AWS_BUCKET_NAME);
                    s3Client = new client_s3_1.S3Client([{
                            region: region,
                            credentials: {
                                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                            },
                        }]);
                    fileExtesnsion = path_1.default.extname(Key);
                    name_uuid = (0, uuid_generation_1.uuidGeneration)();
                    Key = "".concat(name_uuid).concat(fileExtesnsion);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, s3Client.send(new client_s3_1.PutObjectCommand({
                            Bucket: Bucket,
                            Key: Key,
                            Body: Body,
                            ACL: 'public-read'
                        }))];
                case 2:
                    data = _a.sent();
                    command = new client_s3_1.GetObjectCommand({
                        Bucket: Bucket,
                        Key: Key,
                    });
                    url = "https://".concat(Bucket, ".s3.").concat(region, ".amazonaws.com/").concat(Key);
                    return [2 /*return*/, url];
                case 3:
                    err_1 = _a.sent();
                    throw err_1; // Lança o erro para ser tratado pelo código que chama a função
                case 4: return [2 /*return*/];
            }
        });
    });
}