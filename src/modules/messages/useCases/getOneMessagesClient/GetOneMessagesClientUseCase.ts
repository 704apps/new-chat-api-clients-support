import { Brackets } from 'typeorm'
import { Messages } from '../../../../modules/messages/infra/typeorm/Entities/Messages';
import { AppError } from '../../../../error/AppError';
import { inject, injectable } from 'tsyringe';
import { IMessageRepository } from '../../../../modules/messages/repositories/IMessageRepositories';

@injectable()
class GetOneMessagesClientUseCase {

    
    constructor(
        @inject("MessageRepository")
        private messageRepository: IMessageRepository
    ){}

    public async getOneMessagesClient(statusAttention: string,page:number, pageSize:number): Promise<Messages[]> {
        try {
            
            const newMessage = await this.messageRepository.getOneMessagesClient(statusAttention,page,pageSize)

            return newMessage

        } catch (error) {
          
            throw new AppError('Unexpected error', 400, { error })

        }
    }
}

export {GetOneMessagesClientUseCase}