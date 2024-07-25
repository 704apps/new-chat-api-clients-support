"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const MessageRepositories_1 = require("@modules/messages/infra/typeorm/repositories/MessageRepositories");
const UserRepository_1 = require("@modules/accounts/infra/typeorm/repositories/UserRepository");
const RefleshTokenRepositories_1 = require("@modules/refleshToken/infra/typeorm/repositories/RefleshTokenRepositories");
tsyringe_1.container.registerSingleton("MessageRepository", MessageRepositories_1.MessageRepository);
tsyringe_1.container.registerSingleton("UserRepository", UserRepository_1.UserRepository);
tsyringe_1.container.registerSingleton("UserRepository", RefleshTokenRepositories_1.RefleshTokenRepostory);
