import { OldMessages } from '../../../../modules/messages/infra/typeorm/Entities/OldMessages';
import { IMessageRepository } from '../../../../modules/messages/repositories/IMessageRepositories';
declare class GetOldMessagesUseCase {
    private messageRepository;
    constructor(messageRepository: IMessageRepository);
    getOldMessages(id: number): Promise<OldMessages[]>;
}
export { GetOldMessagesUseCase };
