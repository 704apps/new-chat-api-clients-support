"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditUserController = void 0;
require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _EditUserUseCase = require("./EditUserUseCase");
class EditUserController {
  async handle(request, response) {
    try {
      const id = request.params.id;
      const {
        name,
        email
      } = await request.body;
      const file = await request.file;
      if (!name || !email || !id) {
        return response.status(400).json({
          error: "Missing required fields"
        });
      }
      // let dataFile:IUploadDTOS

      //console.log(file)

      // if(file.originalname){
      //     console.log('44')

      //      dataFile.filename = String(file.originalname);
      //      dataFile.filecontent = file.buffer
      // }
      // console.log(dataFile.filename)
      // console.log('55')
      const data = {
        id,
        email,
        name
      };
      const editUserUseCase = await _tsyringe.container.resolve(_EditUserUseCase.EditUserUseCase);
      //console.log(data)
      const user = await editUserUseCase.execute(data);
      return response.status(200).json({
        message: 'User update successfully',
        user
      });
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.EditUserController = EditUserController;