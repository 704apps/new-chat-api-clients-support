import { Messages } from "../../../../modules/messages/infra/typeorm/Entities/Messages";
import { IMessageRepository } from "../../../../modules/messages/repositories/IMessageRepositories";
declare class UpdateBySAUseCase {
    private messageRepository;
    constructor(messageRepository: IMessageRepository);
    upldateSA(id: number): Promise<Messages>;
}
export { UpdateBySAUseCase };
