import { QueryMessage, UploadDataDTO } from "../DTOs/querysparamsDTO";
import { MessageDTO } from "../DTOs/messageDTO";
import { DtoNewMessages } from "../DTOs/newMessagesDTO";

import { Messages } from "../infra/typeorm/Entities/Messages";

interface IMessageRepository{
    createMessage(message: MessageDTO): Promise<Messages>;
    update(id:number,message:string):Promise<Messages>;
    upldateSA(id:number):Promise<Messages>;
    delete(id:number):Promise<String>;
    getOneMessage(id:number):Promise<Messages>;
    getFilterToStatusSidebar(statusAttention: string):Promise<DtoNewMessages[]>;
    getNewMessages(statusAttention:string):Promise<DtoNewMessages[]>;
    getMessagesRespondingToSupport(supportId:string):Promise<DtoNewMessages[]>;
    getSearchProject(projectId:string):Promise<DtoNewMessages[]>;
    getSearchByWordOrPhrase(text: string, supportId: string):Promise<Messages[]>;
    getSearchGenerationToSupport(text: string, supportId: string):Promise<Messages[]>;
    uploadMedia(data:UploadDataDTO):Promise<void>;
   
}

export {IMessageRepository}