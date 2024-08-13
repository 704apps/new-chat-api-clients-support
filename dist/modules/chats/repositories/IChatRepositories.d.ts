import { ChatDTO } from '../DTOs/chatDTO';
import { Chats } from '../infra/typeorm/Entities/Chats';
export interface IChatRepository {
    getStatusAttention(id: number, supportId: string): Promise<Chats>;
    updateStatusFinished(id: number): Promise<Chats>;
    updateStatusOpen(id: number, supportId: string): Promise<Chats>;
    getCreateChat(infochat: ChatDTO): Promise<Chats>;
}
