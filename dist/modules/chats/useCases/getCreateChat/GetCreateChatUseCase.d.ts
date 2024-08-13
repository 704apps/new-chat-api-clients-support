import { IChatRepository } from "../../../../modules/chats/repositories/IChatRepositories";
import { Chats } from "../../../../modules/chats/infra/typeorm/Entities/Chats";
import { ChatDTO } from "../../../../modules/chats/DTOs/chatDTO";
declare class GetCreateChatUseCase {
    private chatRepository;
    constructor(chatRepository: IChatRepository);
    getCreateChat(infochat: ChatDTO): Promise<Chats>;
}
export { GetCreateChatUseCase };
