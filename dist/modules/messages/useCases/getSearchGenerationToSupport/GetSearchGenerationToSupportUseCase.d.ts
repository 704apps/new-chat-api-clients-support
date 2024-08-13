import { Messages } from '../../../../modules/messages/infra/typeorm/Entities/Messages';
import { IMessageRepository } from '../../../../modules/messages/repositories/IMessageRepositories';
declare class GetSearchGenerationToSupportUseCase {
    private messageRepository;
    constructor(messageRepository: IMessageRepository);
    getSearchGenerationToSupport(text: string, supportId: string): Promise<Messages[]>;
}
export { GetSearchGenerationToSupportUseCase };
