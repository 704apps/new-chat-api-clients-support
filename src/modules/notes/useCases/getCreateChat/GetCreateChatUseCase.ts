import { IChatRepository } from "../../../../modules/chats/repositories/IChatRepositories";
import { AppError } from "../../../../error/AppError";
import { inject, injectable } from "tsyringe";
import { Chats } from "../../../../modules/chats/infra/typeorm/Entities/Chats";
import { ChatDTO } from "../../../../modules/chats/DTOs/chatDTO";

@injectable()
class GetCreateChatUseCase {

    constructor(
        @inject("ChatRepository")
        private chatRepository: IChatRepository
    ){}

    public async getCreateChat(infochat: ChatDTO):Promise<Chats> {
        try {

            const chatUpdadeStatusOpen = await this.chatRepository.getCreateChat(infochat);

            return chatUpdadeStatusOpen

        } catch (error) {

            throw new AppError('Error when update chat!', 400, { error })

        }
    }
}

export {GetCreateChatUseCase}