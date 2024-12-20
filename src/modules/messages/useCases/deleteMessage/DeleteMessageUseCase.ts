import { IMessageRepository } from "../../../../modules/messages/repositories/IMessageRepositories";
import { AppError } from "../../../../error/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteMessageUseCase {

    constructor(
        @inject("MessageRepository")
        private messageRepository: IMessageRepository
    ){}

    public async delete(id: number) {
        try {

            await this.messageRepository.delete(id);

            return 

        } catch (error) {

            throw new AppError('Error when deleting message!', 400, { error })

        }
    }
}

export {DeleteMessageUseCase}