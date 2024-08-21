import { Brackets } from 'typeorm'
import { Messages } from '../../../../modules/messages/infra/typeorm/Entities/Messages';
import { AppError } from '../../../../error/AppError';
import { inject, injectable } from 'tsyringe';
import { IMessageRepository } from '../../../../modules/messages/repositories/IMessageRepositories';

@injectable()
class GetOldMessagesUseCase {

    
    constructor(
        @inject("MessageRepository")
        private messageRepository: IMessageRepository
    ){}

    public async getOldMessages(id: number): Promise<String[]> {
        try {
            
            const newMessage = await this.messageRepository.getOldMessages(id)

            return newMessage

        } catch (error) {
            throw new AppError('Unexpected error', 400, { error })

        }
        
    }



}

export {GetOldMessagesUseCase}