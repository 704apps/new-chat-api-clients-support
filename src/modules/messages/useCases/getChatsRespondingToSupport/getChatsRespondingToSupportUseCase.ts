
import { AppError } from '../../../../error/AppError';
import { inject, injectable } from 'tsyringe';
import { IMessageRepository } from '../../../../modules/messages/repositories/IMessageRepositories';
import { DtoNewMessages } from '../../../../modules/messages/DTOs/newMessagesDTO';

@injectable()
class GetChatsRespondingToSupportUseCase {

    
    constructor(
        @inject("MessageRepository")
        private messageRepository: IMessageRepository
    ){}

    public async getChatsRespondingToSupport(supportId: string): Promise<DtoNewMessages[]> {
        try {
            
            const newMessage = await this.messageRepository.getMessagesRespondingToSupport(supportId)

            return newMessage

        } catch (error) {
            
            throw new AppError('Unexpected error', 400, { error })

        }
    }



}

export {GetChatsRespondingToSupportUseCase}