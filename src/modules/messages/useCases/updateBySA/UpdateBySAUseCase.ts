import { Messages } from "../../../../modules/messages/infra/typeorm/Entities/Messages";
import { IMessageRepository } from "../../../../modules/messages/repositories/IMessageRepositories";
import { AppError } from "../../../../error/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateBySAUseCase {

    constructor(
        @inject("MessageRepository")
        private messageRepository: IMessageRepository
    ){}

    public async upldateSA(id: number): Promise<Messages> {
        try {

            const project = await this.messageRepository.upldateSA(id);
           
            return project

        } catch (error) {

            throw new AppError('An error occurred while updating!', 400, { error })

        }
    }
}

export {UpdateBySAUseCase}