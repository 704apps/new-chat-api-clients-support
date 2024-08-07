import { IMessageRepository } from "../../../../modules/messages/repositories/IMessageRepositories";
declare class DeleteMessageUseCase {
    private messageRepository;
    constructor(messageRepository: IMessageRepository);
    delete(id: number): Promise<void>;
}
export { DeleteMessageUseCase };
