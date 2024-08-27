"use strict";

var _tsyringe = require("tsyringe");
var _MessageRepositories = require("../../modules/messages/infra/typeorm/repositories/MessageRepositories");
var _UserRepository = require("../../modules/accounts/infra/typeorm/repositories/UserRepository");
var _RefreshTokenRepositories = require("../../modules/refreshToken/infra/typeorm/repositories/RefreshTokenRepositories");
var _ChatRepositories = require("../../modules/chats/infra/typeorm/repositories/ChatRepositories");
var _NoteRepositories = require("../../modules/notes/infra/typeorm/repositories/NoteRepositories");
_tsyringe.container.registerSingleton("MessageRepository", _MessageRepositories.MessageRepository);
_tsyringe.container.registerSingleton("RefreshTokenRepostory", _RefreshTokenRepositories.RefreshTokenRepostory);
_tsyringe.container.registerSingleton("ChatRepository", _ChatRepositories.ChatRepository);
_tsyringe.container.registerSingleton("NoteRepository", _NoteRepositories.NoteRepository);
_tsyringe.container.register("UserRepository", {
  useClass: _UserRepository.UserRepository
});