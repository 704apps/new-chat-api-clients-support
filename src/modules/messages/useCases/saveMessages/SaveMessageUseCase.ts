import { Messages } from "@modules/messages/infra/typeorm/Entities/Messages";
import { IMessageRepository } from "@modules/messages/repositories/IMessageRepositories";
import { AppError } from "@error/AppError";
import { inject, injectable } from "tsyringe";
import { MessageDTO } from "@modules/messages/DTOs/messageDTO";

@injectable()
class MessageService {

    constructor(
        @inject("MessageRepository")
        private messageRepository: IMessageRepository

    ) { }


    public async createMessage(message: MessageDTO): Promise<Messages> {
        try {

            const project = await this.messageRepository.createMessage(message);

            return project

        } catch (error) {

            throw new AppError('Error when saving message!', 400, { error })

        }

    }



}
