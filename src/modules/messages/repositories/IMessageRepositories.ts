import { QueryMessage, UploadDataDTO } from "../DTOs/querysparamsDTO";
import { MessageDTO } from "../DTOs/messageDTO";
import { DtoNewMessages } from "../DTOs/newMessagesDTO";

import { Messages } from "../infra/typeorm/Entities/Messages";
import { OldMessages } from "../infra/typeorm/Entities/OldMessages";

interface IMessageRepository{
    createMessage(message: MessageDTO): Promise<Messages>;
    update(id:number,message:string):Promise<Messages>;
    upldateSA(id:number):Promise<Messages>;
    delete(id:number):Promise<String>;
    getOneMessage(id:number):Promise<Messages>;
    getOldMessages(id:number):Promise<OldMessages[]>;
    getFilterToStatusSidebar(statusAttention: string):Promise<DtoNewMessages[]>;
    getNewMessages(statusAttention:string):Promise<DtoNewMessages[]>;
    getMessagesRespondingToSupport(supportId:string):Promise<DtoNewMessages[]>;
    getSearchProject(projectId:string):Promise<DtoNewMessages[]>;
    getOneMessagesClient( projectId: string,page: number,pageSize: number):Promise<Messages[]>
    getSearchByWordOrPhrase(text: string, supportId: string):Promise<Messages[]>;
    getSearchGenerationToSupport(text: string, supportId: string):Promise<Messages[]>;
    uploadMedia(data:UploadDataDTO):Promise<void>;
   
}


export {IMessageRepository}