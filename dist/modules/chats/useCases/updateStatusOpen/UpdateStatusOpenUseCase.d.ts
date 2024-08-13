import { IChatRepository } from "../../../../modules/chats/repositories/IChatRepositories";
import { Chats } from "../../../../modules/chats/infra/typeorm/Entities/Chats";
declare class UpdateStatusOpenUseCase {
    private chatRepository;
    constructor(chatRepository: IChatRepository);
    updateStatusOpen(id: number, supportId: string): Promise<Chats>;
}
export { UpdateStatusOpenUseCase };
