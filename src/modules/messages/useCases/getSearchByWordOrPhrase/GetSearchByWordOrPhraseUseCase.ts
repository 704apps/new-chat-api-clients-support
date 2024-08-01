import { Brackets } from 'typeorm'
import { myDataSource } from 'main/infra/typeorm/connection/app-data-source';
import { Messages } from '@modules/messages/infra/typeorm/Entities/Messages';
import { AppError } from '@error/AppError';
import { inject, injectable } from 'tsyringe';
import { IMessageRepository } from '@modules/messages/repositories/IMessageRepositories';
import { DtoNewMessages } from '@modules/messages/DTOs/newMessagesDTO';

@injectable()
class GetSearchByWordOrPhraseUseCase {

    
    constructor(
        @inject("MessageRepository")
        private messageRepository: IMessageRepository
    ){}

    public async getSearchByWordOrPhrase(text: string,supportId:string): Promise<Messages[]> {
        try {
            
            const newMessage = await this.messageRepository.getSearchByWordOrPhrase(text,supportId)

            return newMessage

        } catch (error) {
            throw new AppError('Unexpected error', 400, { error })

        }
    }



}

export {GetSearchByWordOrPhraseUseCase}