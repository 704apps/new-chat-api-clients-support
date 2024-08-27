"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetSearchProjectController = void 0;
var _GetSearchProjectUseCase = require("./GetSearchProjectUseCase");
var _tsyringe = require("tsyringe");
var _AppError = require("../../../../error/AppError");
class GetSearchProjectController {
  async handle(request, response) {
    try {
      const {
        projectId
      } = request.query;
      if (!projectId) {
        throw new _AppError.AppError('Project name is required');
      }
      const getSearchProjectUseCase = _tsyringe.container.resolve(_GetSearchProjectUseCase.GetSearchProjectUseCase);
      const messages = await getSearchProjectUseCase.getSearchProject(String(projectId));
      return response.status(200).json(messages);
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.GetSearchProjectController = GetSearchProjectController;