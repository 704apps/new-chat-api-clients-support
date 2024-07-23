import { IMessageRepository } from "@modules/messages/repositories/IMessageRepositories";
import { getRepository, Repository } from "typeorm";
import { Messages } from "../Entities/Messages";
import { MessageDTO } from "@modules/messages/DTOs/messageDTO";
import { DtoNewMessages } from "@modules/messages/DTOs/newMessagesDTO";
import { UploadDataDTO } from "@modules/messages/DTOs/querysparams";
import { myDataSource } from "@main/infra/typeorm/connection/app-data-source";

 

class MessageRepository implements IMessageRepository{
    private repository:Repository<Messages>

    constructor(){
        myDataSource
        this.repository = myDataSource.getRepository(Messages)
    }

    createMessage(message: MessageDTO): Promise<Messages> {
        throw new Error("Method not implemented.");
    }
    update(id: number, message: string): Promise<Messages> {
        throw new Error("Method not implemented.");
    }
    upldateSA(id: number): Promise<String> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<String> {
        throw new Error("Method not implemented.");
    }
    getNewMessages(statusAttention: string): Promise<DtoNewMessages> {
        throw new Error("Method not implemented.");
    }
    getMessagesRespondingToSupport(supportId: string): Promise<DtoNewMessages> {
        throw new Error("Method not implemented.");
    }
    getSearchProject(projectId: string): Promise<DtoNewMessages> {
        throw new Error("Method not implemented.");
    }
    getSearchByWordOrPhrase(text: string, supportId: string): Promise<Messages[]> {
        throw new Error("Method not implemented.");
    }
    getSearchGenerationToSupport(text: string, supportId: string): Promise<Messages[]> {
        throw new Error("Method not implemented.");
    }
    uploadMedia(data: UploadDataDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

    
}
