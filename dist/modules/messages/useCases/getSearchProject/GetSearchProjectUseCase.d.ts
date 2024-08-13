import { IMessageRepository } from '../../../../modules/messages/repositories/IMessageRepositories';
import { DtoNewMessages } from '../../../../modules/messages/DTOs/newMessagesDTO';
declare class GetSearchProjectUseCase {
    private messageRepository;
    constructor(messageRepository: IMessageRepository);
    getSearchProject(statusAttention: string): Promise<DtoNewMessages[]>;
}
export { GetSearchProjectUseCase };
