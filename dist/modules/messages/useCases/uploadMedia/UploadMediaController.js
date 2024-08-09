"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadMediaController = void 0;
var _UploadMediaUseCase = require("./UploadMediaUseCase");
var _tsyringe = require("tsyringe");
class UploadMediaController {
  async handle(request, response) {
    try {
      const file = await request.file;
      const dataBody = await request.body;
      const uploadMediaUseCase = _tsyringe.container.resolve(_UploadMediaUseCase.UploadMediaUseCase);
      if (file) {
        dataBody.filecontent = file.buffer;
        dataBody.filename = file.originalname;
        await uploadMediaUseCase.uploadMedia(dataBody);
      }
      return response.status(200).json({
        message: 'Upload completed successfully!'
      });
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.UploadMediaController = UploadMediaController;