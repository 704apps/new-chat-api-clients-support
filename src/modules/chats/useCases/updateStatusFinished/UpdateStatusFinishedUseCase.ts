import { IChatRepository } from "../../../../modules/chats/repositories/IChatRepositories";
import { AppError } from "../../../../error/AppError";
import { inject, injectable } from "tsyringe";
import { Chats } from "../../../../modules/chats/infra/typeorm/Entities/Chats";

@injectable()
class UpdateStatusFinishedUseCase {

    constructor(
        @inject("ChatRepository")
        private chatRepository: IChatRepository
    ){}

    public async updateStatusFinished(id: number):Promise<Chats> {
        try {

            const chatUpdadeStatusFinished = await this.chatRepository.updateStatusFinished(id);

            return chatUpdadeStatusFinished

        } catch (error) {

            throw new AppError('Error when update chat!', 400, { error })

        }
    }
}

export {UpdateStatusFinishedUseCase}