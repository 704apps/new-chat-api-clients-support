import { ChatDTO } from "../../../../../modules/chats/DTOs/chatDTO";
import { IChatRepository } from "../../../../../modules/chats/repositories/IChatRepositories";
import { Chats } from "../Entities/Chats";
declare class ChatRepository implements IChatRepository {
    private repositoryChat;
    constructor();
    getStatusAttention(id: number, supportId: string): Promise<Chats>;
    updateStatusFinished(id: number): Promise<Chats>;
    updateStatusOpen(id: number, supportId: string): Promise<Chats>;
    getCreateChat(infochat: ChatDTO): Promise<Chats>;
}
export { ChatRepository };
