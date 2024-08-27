import { Messages } from "../../../../modules/messages/infra/typeorm/Entities/Messages";
import { IMessageRepository } from "../../../../modules/messages/repositories/IMessageRepositories";
declare class UpdateMessageUseCase {
    private messageRepository;
    constructor(messageRepository: IMessageRepository);
    updateMessage(id: number, message: string): Promise<Messages>;
}
export { UpdateMessageUseCase };
