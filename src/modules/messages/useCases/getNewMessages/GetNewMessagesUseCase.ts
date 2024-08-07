
import { AppError } from '../../../../error/AppError';
import { inject, injectable } from 'tsyringe';
import { IMessageRepository } from '../../../../modules/messages/repositories/IMessageRepositories';
import { DtoNewMessages } from '../../../../modules/messages/DTOs/newMessagesDTO';

@injectable()
class GetNewMessagesUseCase {

    
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

export {GetNewMessagesUseCase}