import { Messages } from "@modules/messages/infra/typeorm/Entities/Messages";
import { IChatRepository } from "@modules/chats/repositories/IChatRepositories";
import { AppError } from "@error/AppError";
import { inject, injectable } from "tsyringe";
import { Chats } from "@modules/chats/infra/typeorm/Entities/Chats";

@injectable()
class GetStatusAttentionUseCase {

    constructor(
        @inject("ChatRepository")
        private chatRepository: IChatRepository
    ){}

    public async getStatusAttention(id: number,supportId:string):Promise<Chats> {
        try {

            const chatUpdadeStatusResponding = await this.chatRepository.getStatusAttention(id,supportId);

            return chatUpdadeStatusResponding

        } catch (error) {

            throw new AppError('Error when update chat!', 400, { error })

        }
    }
}

export {GetStatusAttentionUseCase}