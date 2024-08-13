"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadToAws = uploadToAws;
var _clientS = require("@aws-sdk/client-s3");
var _path = _interopRequireDefault(require("path"));
var _uuid = require("../util/uuid.generation");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

async function uploadToAws(Key, Body) {
  const region = process.env.AWS_REGION;
  const Bucket = String(process.env.AWS_BUCKET_NAME);
  const s3Client = new _clientS.S3Client([{
    region,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
  }]);
  const fileExtesnsion = _path.default.extname(Key);
  const name_uuid = (0, _uuid.uuidGeneration)();
  Key = `${name_uuid}${fileExtesnsion}`;
  try {
    const data = await s3Client.send(new _clientS.PutObjectCommand({
      Bucket,
      Key,
      Body,
      ACL: 'public-read'
    }));
    const command = new _clientS.GetObjectCommand({
      Bucket,
      Key
    });

    //await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // URL expira em 1 hora
    const url = `https://${Bucket}.s3.${region}.amazonaws.com/${Key}`;
    return url;
  } catch (err) {
    throw err; // Lança o erro para ser tratado pelo código que chama a função
  }
}