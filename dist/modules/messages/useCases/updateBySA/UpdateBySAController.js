"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateMessageController = void 0;
var _UpdateBySAUseCase = require("./UpdateBySAUseCase");
var _tsyringe = require("tsyringe");
class UpdateMessageController {
  async handle(request, response) {
    try {
      const id = request.params.id;
      const uppdateBySAUseCase = await _tsyringe.container.resolve(_UpdateBySAUseCase.UpdateBySAUseCase);
      const messageUpdade = await uppdateBySAUseCase.upldateSA(id);
      return response.status(200).json(messageUpdade);
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.UpdateMessageController = UpdateMessageController;