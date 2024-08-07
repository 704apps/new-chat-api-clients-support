import { IMessageRepository } from '../../../../modules/messages/repositories/IMessageRepositories';
import { DtoNewMessages } from '../../../../modules/messages/DTOs/newMessagesDTO';
declare class GetFilterToStatusSidebarUseCase {
    private messageRepository;
    constructor(messageRepository: IMessageRepository);
    getFilterToStatusSidebar(statusAttention: string): Promise<DtoNewMessages[]>;
}
export { GetFilterToStatusSidebarUseCase };
