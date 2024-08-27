"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadAvatarController = void 0;
var _UploadAvatarUseCase = require("./UploadAvatarUseCase");
var _tsyringe = require("tsyringe");
class UploadAvatarController {
  async handle(request, response) {
    try {
      const file = await request.file;
      const idUser = request.params.id;
      let dataBody = {};
      const uploadAvatarUseCase = _tsyringe.container.resolve(_UploadAvatarUseCase.UploadAvatarUseCase);
      if (!file) {
        return response.status(400).json({
          error: "File not provided!"
        });
      }
      dataBody.id = idUser;
      dataBody.filecontent = file.buffer;
      dataBody.filename = file.originalname;
      const user = await uploadAvatarUseCase.uploadMedia(dataBody);
      return response.status(200).json(user);
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        error
      });
    }
  }
}
exports.UploadAvatarController = UploadAvatarController;