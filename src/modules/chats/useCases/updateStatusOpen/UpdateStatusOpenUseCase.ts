import { IChatRepository } from "../../../../modules/chats/repositories/IChatRepositories";
import { AppError } from "../../../../error/AppError";
import { inject, injectable } from "tsyringe";
import { Chats } from "../../../../modules/chats/infra/typeorm/Entities/Chats";

@injectable()
class UpdateStatusOpenUseCase {

    constructor(
        @inject("ChatRepository")
        private chatRepository: IChatRepository
    ){}

    public async updateStatusOpen(id: number,supportId:string):Promise<Chats> {
        try {

            const chatUpdadeStatusOpen = await this.chatRepository.updateStatusOpen(id,supportId);

            return chatUpdadeStatusOpen

        } catch (error) {

            throw new AppError('Error when update chat!', 400, { error })

        }
    }
}

export {UpdateStatusOpenUseCase}