import {container} from "tsyringe"

import {MessageRepository} from "@modules/messages/infra/typeorm/repositories/MessageRepositories"
import {IMessageRepository} from "@modules/messages/repositories/IMessageRepositories"

import {UserRepository} from "@modules/accounts/infra/typeorm/repositories/UserRepository"
import {IUserRepository} from "@modules/accounts/repositories/IUsersRepository"

import {RefreshTokenRepostory} from "@modules/refreshToken/infra/typeorm/repositories/RefreshTokenRepositories"
import {IRefreshTokenRepostory} from "@modules/refreshToken/repositories/IRefreshTokenRepositoies"
import { IChatRepository } from "@modules/chats/repositories/IChatRepositories"
import { ChatRepository } from "@modules/chats/infra/typeorm/repositories/ChatRepositories"


container.registerSingleton<IMessageRepository>(
    "MessageRepository",MessageRepository
)

container.registerSingleton<IRefreshTokenRepostory>(
    "RefreshTokenRepostory",RefreshTokenRepostory
)

container.registerSingleton<IChatRepository>(
    "ChatRepository",ChatRepository
)


container.register<IUserRepository>("UserRepository", {
    useClass: UserRepository,
});
