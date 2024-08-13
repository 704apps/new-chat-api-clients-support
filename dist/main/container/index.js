"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var MessageRepositories_1 = require("../../modules/messages/infra/typeorm/repositories/MessageRepositories");
var UserRepository_1 = require("../../modules/accounts/infra/typeorm/repositories/UserRepository");
var RefreshTokenRepositories_1 = require("../../modules/refreshToken/infra/typeorm/repositories/RefreshTokenRepositories");
var ChatRepositories_1 = require("../../modules/chats/infra/typeorm/repositories/ChatRepositories");
tsyringe_1.container.registerSingleton("MessageRepository", MessageRepositories_1.MessageRepository);
tsyringe_1.container.registerSingleton("RefreshTokenRepostory", RefreshTokenRepositories_1.RefreshTokenRepostory);
tsyringe_1.container.registerSingleton("ChatRepository", ChatRepositories_1.ChatRepository);
tsyringe_1.container.register("UserRepository", {
    useClass: UserRepository_1.UserRepository,
});
