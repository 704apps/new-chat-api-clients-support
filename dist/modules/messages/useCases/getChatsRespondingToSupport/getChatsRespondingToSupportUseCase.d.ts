import { IMessageRepository } from '../../../../modules/messages/repositories/IMessageRepositories';
import { DtoNewMessages } from '../../../../modules/messages/DTOs/newMessagesDTO';
declare class GetChatsRespondingToSupportUseCase {
    private messageRepository;
    constructor(messageRepository: IMessageRepository);
    getChatsRespondingToSupport(supportId: string): Promise<DtoNewMessages[]>;
}
export { GetChatsRespondingToSupportUseCase };
