
import { AppError } from '../../../../error/AppError';
import { inject, injectable } from 'tsyringe';
import { IMessageRepository } from '../../../../modules/messages/repositories/IMessageRepositories';
import { DtoNewMessages } from '../../../../modules/messages/DTOs/newMessagesDTO';

@injectable()
class GetFilterToStatusSidebarUseCase {

    
    constructor(
        @inject("MessageRepository")
        private messageRepository: IMessageRepository
    ){}

    public async getFilterToStatusSidebar(statusAttention: string): Promise<DtoNewMessages[]> {
        try {
            
            const newMessage = await this.messageRepository.getFilterToStatusSidebar(statusAttention)

            return newMessage

        } catch (error) {
           
            throw new AppError('Unexpected error', 400, { error })

        }
    }



}

export {GetFilterToStatusSidebarUseCase}