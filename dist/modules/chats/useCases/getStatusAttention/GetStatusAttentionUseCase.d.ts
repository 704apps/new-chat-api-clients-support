import { IChatRepository } from "../../../../modules/chats/repositories/IChatRepositories";
import { Chats } from "../../../../modules/chats/infra/typeorm/Entities/Chats";
declare class GetStatusAttentionUseCase {
    private chatRepository;
    constructor(chatRepository: IChatRepository);
    getStatusAttention(id: number, supportId: string): Promise<Chats>;
}
export { GetStatusAttentionUseCase };
