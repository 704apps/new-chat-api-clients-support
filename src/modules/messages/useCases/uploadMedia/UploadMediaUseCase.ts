import { Messages } from "@modules/messages/infra/typeorm/Entities/Messages";
import { IMessageRepository } from "@modules/messages/repositories/IMessageRepositories";
import { AppError } from "@error/AppError";
import { inject, injectable } from "tsyringe";
import { UploadDataDTO } from "@modules/messages/DTOs/querysparamsDTO";

@injectable()
class UploadMediaUseCase {

    constructor(
        @inject("MessageRepository")
        private messageRepository: IMessageRepository
    ){}

    public async uploadMedia(data: UploadDataDTO) {
        try {

            const project = await this.messageRepository.uploadMedia(data);
            return project

        } catch (error) {

            throw new AppError('An error occurred while updating!', 400, { error })

        }
    }
}

export {UploadMediaUseCase}