"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetStatusAttentionController = void 0;
var _GetStatusAttentionUseCase = require("./GetStatusAttentionUseCase");
var _tsyringe = require("tsyringe");
class GetStatusAttentionController {
  async handle(request, response) {
    try {
      const idChat = request.params.id;
      const {
        supportId
      } = request.query;
      const getStatusAttentionUseCase = await _tsyringe.container.resolve(_GetStatusAttentionUseCase.GetStatusAttentionUseCase);
      await getStatusAttentionUseCase.getStatusAttention(idChat, String(supportId));
      return response.status(200).json(getStatusAttentionUseCase);
    } catch (error) {
      return response.status(400).json({
        error
      });
    }
  }
}
exports.GetStatusAttentionController = GetStatusAttentionController;