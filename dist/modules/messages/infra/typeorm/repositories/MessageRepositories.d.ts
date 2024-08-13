import { IMessageRepository } from "../../../../../modules/messages/repositories/IMessageRepositories";
import { Messages } from "../Entities/Messages";
import { MessageDTO } from "../../../../../modules/messages/DTOs/messageDTO";
import { DtoNewMessages } from "../../../../../modules/messages/DTOs/newMessagesDTO";
import { UploadDataDTO } from "../../../../../modules/messages/DTOs/querysparamsDTO";
declare class MessageRepository implements IMessageRepository {
    private repositoryMessage;
    private repositoryChat;
    private repositoryContacts;
    private next;
    constructor();
    createMessage(message: MessageDTO): Promise<Messages>;
    update(id: number, message: string): Promise<Messages>;
    getFilterToStatusSidebar(statusAttention: string): Promise<DtoNewMessages[]>;
    upldateSA(id: number): Promise<Messages>;
    delete(id: number): Promise<String>;
    getOneMessage(id: number): Promise<Messages>;
    getNewMessages(statusAttention: string): Promise<DtoNewMessages[]>;
    getMessagesRespondingToSupport(supportId: string): Promise<DtoNewMessages[]>;
    getSearchProject(projectId: string): Promise<DtoNewMessages[]>;
    getSearchByWordOrPhrase(text: string, supportId: string): Promise<Messages[]>;
    getSearchGenerationToSupport(text: string, supportId: string): Promise<Messages[]>;
    getOneMessagesClient(projectId: string, page: number, pageSize: number): Promise<Messages[]>;
    uploadMedia(data: UploadDataDTO): Promise<void>;
}
export { MessageRepository };
