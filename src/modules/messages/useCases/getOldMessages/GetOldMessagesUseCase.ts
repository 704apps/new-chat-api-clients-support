import { Brackets } from 'typeorm'
import { OldMessages } from '../../../../modules/messages/infra/typeorm/Entities/OldMessages';
import { AppError } from '../../../../error/AppError';
import { inject, injectable } from 'tsyringe';
import { IMessageRepository } from '../../../../modules/messages/repositories/IMessageRepositories';

@injectable()
class GetOldMessagesUseCase {

    
    constructor(
        @inject("MessageRepository")
        private messageRepository: IMessageRepository
    ){}

    public async getOldMessages(id: number): Promise<OldMessages[]> {
        try {
            
            const newMessage = await this.messageRepository.getOldMessages(id)

            return newMessage

        } catch (error) {
            throw new AppError('Unexpected error', 400, { error })

        }
        
    }



}

export {GetOldMessagesUseCase}