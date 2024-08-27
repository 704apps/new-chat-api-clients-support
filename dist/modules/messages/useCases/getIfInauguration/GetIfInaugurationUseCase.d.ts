import { Messages } from '../../../../modules/messages/infra/typeorm/Entities/Messages';
import { IMessageRepository } from '../../../../modules/messages/repositories/IMessageRepositories';
declare class GetIfInaugurationUseCase {
    private messageRepository;
    constructor(messageRepository: IMessageRepository);
    getIfInauguration(): Promise<Messages[]>;
}
export { GetIfInaugurationUseCase };
