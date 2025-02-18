
import { IMessageRepository } from "../../../../modules/messages/repositories/IMessageRepositories";

import { inject, injectable } from "tsyringe";

import { MessageDTO } from "../../../../modules/messages/DTOs/messageDTO";
import { NextFunction } from "express";

@injectable()
class SaveMessageUseCase {
    private next:  NextFunction

    constructor(
        @inject("MessageRepository")
        private messageRepository: IMessageRepository
    ){}

    public async createMessage(message: MessageDTO){
        try {
          //  console.log('===================')

            const project = await this.messageRepository.createMessage(message);

         //   console.log(project)
            //console.log('MMMMMMMMMMMMMMMMMMM')
            return project

        } catch (error) {
          console.log(error)

            this.next(error)
          //  throw new AppError('Error when saving message!', 400, { error })

        }
    }
}

export {SaveMessageUseCase}