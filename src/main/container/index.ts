import {container} from "tsyringe"

import {MessageRepository} from "@modules/messages/infra/typeorm//repositories/MessageRepositories"
import {IMessageRepository} from "@modules/messages/repositories/IMessageRepositories"

import {UserRepository} from "@modules/accounts/infra/typeorm//repositories/UserRepository"
import {IUserRespository} from "@modules/accounts/repositories/IUsersRespository"

container.registerSingleton<IMessageRepository>(
    "MessageRepository",MessageRepository
)

container.registerSingleton<IUserRespository>(
    "UserRepository",UserRepository
)


