"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetIfInaugurationController = void 0;
var _GetIfInaugurationUseCase = require("./GetIfInaugurationUseCase");
var _tsyringe = require("tsyringe");
class GetIfInaugurationController {
  async handle(request, response) {
    try {
      const idMessage = request.params.id;
      const getIfInaugurationUseCase = _tsyringe.container.resolve(_GetIfInaugurationUseCase.GetIfInaugurationUseCase);
      const messages = await getIfInaugurationUseCase.getIfInauguration();
      return response.status(200).json(messages);
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.GetIfInaugurationController = GetIfInaugurationController;