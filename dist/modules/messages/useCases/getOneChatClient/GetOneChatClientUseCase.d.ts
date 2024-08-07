import { Messages } from '../../../../modules/messages/infra/typeorm/Entities/Messages';
declare class GetOneChatClientUseCase {
    private messageRepository;
    constructor();
    getOneMessagesClient(chatId: number): Promise<Messages[]>;
}
export { GetOneChatClientUseCase };
