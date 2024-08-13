import { Messages } from '../../../../modules/messages/infra/typeorm/Entities/Messages';
import { IMessageRepository } from '../../../../modules/messages/repositories/IMessageRepositories';
declare class GetOneMessagesClientUseCase {
    private messageRepository;
    constructor(messageRepository: IMessageRepository);
    getOneMessagesClient(statusAttention: string, page: number, pageSize: number): Promise<Messages[]>;
}
export { GetOneMessagesClientUseCase };
