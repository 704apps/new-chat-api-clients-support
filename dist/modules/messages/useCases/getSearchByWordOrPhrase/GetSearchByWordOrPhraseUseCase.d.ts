import { Messages } from '../../../../modules/messages/infra/typeorm/Entities/Messages';
import { IMessageRepository } from '../../../../modules/messages/repositories/IMessageRepositories';
declare class GetSearchByWordOrPhraseUseCase {
    private messageRepository;
    constructor(messageRepository: IMessageRepository);
    getSearchByWordOrPhrase(text: string, supportId: string): Promise<Messages[]>;
}
export { GetSearchByWordOrPhraseUseCase };
