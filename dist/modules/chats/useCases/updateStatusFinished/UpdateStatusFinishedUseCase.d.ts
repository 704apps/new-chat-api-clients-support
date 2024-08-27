import { IChatRepository } from "../../../../modules/chats/repositories/IChatRepositories";
import { Chats } from "../../../../modules/chats/infra/typeorm/Entities/Chats";
declare class UpdateStatusFinishedUseCase {
    private chatRepository;
    constructor(chatRepository: IChatRepository);
    updateStatusFinished(id: number): Promise<Chats>;
}
export { UpdateStatusFinishedUseCase };
