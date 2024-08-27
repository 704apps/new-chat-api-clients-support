"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetFilterToStatusSidebarController = void 0;
var _GetFilterToStatusSidebarUseCase = require("./GetFilterToStatusSidebarUseCase");
var _tsyringe = require("tsyringe");
var _AppError = require("../../../../error/AppError");
class GetFilterToStatusSidebarController {
  async handle(request, response) {
    try {
      const {
        projectId
      } = request.query;
      if (!projectId) {
        throw new _AppError.AppError('Project name is required');
      }
      const getFilterToStatusSidebarUseCase = _tsyringe.container.resolve(_GetFilterToStatusSidebarUseCase.GetFilterToStatusSidebarUseCase);
      const messages = await getFilterToStatusSidebarUseCase.getFilterToStatusSidebar(String(projectId));
      return response.status(200).json(messages);
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.GetFilterToStatusSidebarController = GetFilterToStatusSidebarController;