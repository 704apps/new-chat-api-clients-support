import { IMessageRepository } from "../../../../modules/messages/repositories/IMessageRepositories";
import { MessageDTO } from "../../../../modules/messages/DTOs/messageDTO";
declare class SaveMessageUseCase {
    private messageRepository;
    private next;
    constructor(messageRepository: IMessageRepository);
    createMessage(message: MessageDTO): Promise<import("../../infra/typeorm/Entities/Messages").Messages>;
}
export { SaveMessageUseCase };
