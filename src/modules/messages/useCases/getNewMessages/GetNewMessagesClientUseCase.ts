import { Brackets } from 'typeorm'
import { myDataSource } from 'main/infra/typeorm/connection/app-data-source';
import { Messages } from '@modules/messages/infra/typeorm/Entities/Messages';
import { AppError } from '@error/AppError';
import { inject, injectable } from 'tsyringe';
import { IMessageRepository } from '@modules/messages/repositories/IMessageRepositories';
import { DtoNewMessages } from '@modules/messages/DTOs/newMessagesDTO';

@injectable()
class GetNewMessagesClientUseCase {

    
    constructor(
        @inject("MessageRepository")
        private messageRepository: IMessageRepository
    ){}

    public async getNewMessages(statusAttention: string): Promise<DtoNewMessages[]> {
        try {
            
            const newMessage = await this.messageRepository.getNewMessages(statusAttention)

            return newMessage

        } catch (error) {
            throw new AppError('Unexpected error', 400, { error })

        }
    }



}

export {GetNewMessagesClientUseCase}