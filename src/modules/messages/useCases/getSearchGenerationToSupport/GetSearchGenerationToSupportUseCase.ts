
import { Messages } from '../../../../modules/messages/infra/typeorm/Entities/Messages';
import { AppError } from '../../../../error/AppError';
import { inject, injectable } from 'tsyringe';
import { IMessageRepository } from '../../../../modules/messages/repositories/IMessageRepositories';

@injectable()
class GetSearchGenerationToSupportUseCase {

    
    constructor(
        @inject("MessageRepository")
        private messageRepository: IMessageRepository
    ){}

    public async getSearchGenerationToSupport(text: string,supportId:string): Promise<Messages[]> {
        try {
            
            const newMessage = await this.messageRepository.getSearchGenerationToSupport(text,supportId)
           
            return newMessage

        } catch (error) {
           
            throw new AppError('Unexpected error', 400, { error })

        }
    }



}

export {GetSearchGenerationToSupportUseCase}