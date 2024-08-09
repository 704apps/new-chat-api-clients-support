"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetOneChatClientUseCase = void 0;
var _appDataSource = require("../../../../main/infra/typeorm/connection/app-data-source");
var _Messages = require("../../../../modules/messages/infra/typeorm/Entities/Messages");
var _AppError = require("../../../../error/AppError");
class GetOneChatClientUseCase {
  constructor() {
    this.messageRepository = _appDataSource.myDataSource.getRepository(_Messages.Messages);
    //Verifica se a conexão estabelicida antes de obter acesso a entidade. 
    if (!_appDataSource.myDataSource.isInitialized) {
      _appDataSource.myDataSource.initialize().then(() => {
        this.messageRepository = _appDataSource.myDataSource.getRepository(_Messages.Messages);
      }).catch(error => console.error("Error ao incializar a conexão:", error));
    }
  }
  async getOneMessagesClient(chatId) {
    try {
      const project = await this.messageRepository.findBy({
        chatId
      });
      return project;
    } catch (error) {
      throw new _AppError.AppError('Unexpected error', 400, {
        error
      });
    }
  }
}
exports.GetOneChatClientUseCase = GetOneChatClientUseCase;