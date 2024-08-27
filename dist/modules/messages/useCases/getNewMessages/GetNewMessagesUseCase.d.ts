import { IMessageRepository } from '../../../../modules/messages/repositories/IMessageRepositories';
import { DtoNewMessages } from '../../../../modules/messages/DTOs/newMessagesDTO';
declare class GetNewMessagesUseCase {
    private messageRepository;
    constructor(messageRepository: IMessageRepository);
    getNewMessages(statusAttention: string): Promise<DtoNewMessages[]>;
}
export { GetNewMessagesUseCase };
