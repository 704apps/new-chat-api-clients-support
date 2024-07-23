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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToAws = uploadToAws;
const client_s3_1 = require("@aws-sdk/client-s3");
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
const path_1 = __importDefault(require("path"));
const uuid_generation_1 = require("../util/uuid.generation");
function uploadToAws(Key, Body) {
    return __awaiter(this, void 0, void 0, function* () {
        const region = process.env.AWS_REGION;
        const Bucket = String(process.env.AWS_BUCKET_NAME);
        const s3Client = new client_s3_1.S3Client([{
                region,
                credentials: {
                    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                },
            }]);
        const fileExtesnsion = path_1.default.extname(Key);
        const name_uuid = (0, uuid_generation_1.uuidGeneration)();
        Key = `${name_uuid}${fileExtesnsion}`;
        try {
            const data = yield s3Client.send(new client_s3_1.PutObjectCommand({
                Bucket,
                Key,
                Body,
                ACL: 'public-read'
            }));
            const command = new client_s3_1.GetObjectCommand({
                Bucket,
                Key,
            });
            //await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // URL expira em 1 hora
            const url = `https://${Bucket}.s3.${region}.amazonaws.com/${Key}`;
            return url;
        }
        catch (err) {
            throw err; // Lança o erro para ser tratado pelo código que chama a função
        }
    });
}
