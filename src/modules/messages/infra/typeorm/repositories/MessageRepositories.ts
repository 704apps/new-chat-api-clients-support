import { IMessageRepository } from "@modules/messages/repositories/IMessageRepositories";
import { Brackets, getRepository, Repository } from "typeorm";
import { Messages } from "../Entities/Messages";
import { MessageDTO } from "@modules/messages/DTOs/messageDTO";
import { DtoNewMessages } from "@modules/messages/DTOs/newMessagesDTO";
import { UploadDataDTO } from "@modules/messages/DTOs/querysparamsDTO";
import { myDataSource } from "@main/infra/typeorm/connection/app-data-source";
import { Chats } from '@modules/chats/infra/typeorm/Entities/Chats'
import { Contacts } from '@modules/contacts/infra/typeorm/Entities/Contacts'
import {io} from '@main/infra/http/server'
import { AppError } from "@error/AppError";
import { uploadToAws } from "@main/infra/upload/aws";

class MessageRepository implements IMessageRepository {
    private repositoryMessage: Repository<Messages>
    private repositoryChat: Repository<Chats>
    private repositoryContacts: Repository<Contacts>

    constructor() {
        this.repositoryMessage = myDataSource.getRepository(Messages)
        this.repositoryChat = myDataSource.getRepository(Chats)
    }

    //Salva as mensagens enviada
    async createMessage(message: MessageDTO): Promise<Messages> {
      
            const { messageType, messages, origin, projectId, supportId, userType, urlImage } =
                message;

            const nameProject = await this.repositoryMessage.findOneBy({
                projectId,
            });

            if (!nameProject) {
                
                   const project = this.repositoryContacts.create({ projectId });
                   this.repositoryContacts.save(project)
                
            }

            // const sID = supportId === null || supportId === '' || supportId === undefined ? '' : supportId

            const chat = await this.repositoryChat
                .createQueryBuilder("chat")
                .where("chat.projectId = :projectId", { projectId })
                .andWhere("chat.statusAttention IN (:...status)", {
                    status: ["OPEN", "RESPONDING"],// Condição para o status
                }) 
                .getOne();

            let chatId = chat?.id;

            if (!chat) {
                console.log("veio aqui com a mensagem");
                const newChat = await this.repositoryChat.create({
                    supportId: supportId,
                    projectId,
                    statusAttention: "OPEN",
                    dateIndex: new Date(),
                });

                const chatSave = await this.repositoryChat.save(newChat);
                chatId = chatSave.id;
            } else {
                if (origin == "support" && !chat.supportId) {

                    chat.supportId = supportId;
                    chat.statusAttention = "RESPONDING";
                    await this.repositoryChat.save(chat);

                    await io.to("support").emit("statusChat", {
                        chatId: chat.id,
                        statusChat: chat.statusAttention,
                    });
                    await io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention });
                    //Atualiza na tabela de mensagem qual suporte está atendendo
                    await this.repositoryMessage
                        .createQueryBuilder()
                        .update(Messages)
                        .set({ supportId: supportId })
                        .where("chatId = :chatId", { chatId: chat.id })
                        .execute();
                }
                else if (origin == "support" && chat.supportId) {

                    if (chat.supportId != supportId) {
                        chat.supportId = supportId;
                        await this.repositoryChat.save(chat);
                        await io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention });
                    }

                    if (chat.statusAttention == "OPEN") {
                        chat.statusAttention = "RESPONDING";
                        await this.repositoryChat.save(chat);
                        await io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention });
                    }


                }
            }

            const newMessage = this.repositoryMessage.create({
                messageType,
                chatId,
                messages,
                origin,
                projectId,
                supportId,
                userType,
                urlImage
            });

            return await this.repositoryMessage.save(newMessage);
      
    }


    async update(id: number, message: string): Promise<Messages> {
        const project = await this.repositoryMessage.findOneBy({
            id,
        });

        if (!project) {
            throw new AppError("Project not found!")
        }
        
        project.messages = message;
        project.msgEdt = true;
        await this.repositoryMessage.save(project);
        return project;
      
    }
    public async getFilterToStatusSidebar(statusAttention: string):Promise<DtoNewMessages[]> {
            
        const selectIdClients = await this.repositoryMessage
                .createQueryBuilder("m")
                .select("m.projectId", "projectId")
                .addSelect("MAX(m.createdAt)", "latestCreatedAt")
                .groupBy("m.projectId");


            const result = await this.repositoryMessage
                .createQueryBuilder("m")
                .innerJoin(
                    `(${selectIdClients.getQuery()})`,
                    "sub",
                    "m.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt"
                )
                .leftJoin("chats", "c", "m.chatId = c.id")
                .select([
                    "m.projectId",
                    "m.createdAt",
                    "m.messages",
                    "m.id",
                    "c.supportId",
                    "c.id as chatId",
                    `CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention`,
                ])
                .where("c.statusAttention=:statusAttention", { statusAttention })
                .orderBy("m.createdAt", "DESC")
                .getRawMany();
            console.log("selectIdClients");
            console.log(result);
            const newMessagens = result.map((item) => ({
                id: item.m_id,
                projectId: item.m_projectId,
                supportId: item.c_supportId,
                statusAttention: item.statusAttention,
                messages: item.m_messages,
                chatId: item.chatId,
                createdAt: item.m_createdAt,
            })) as unknown as DtoNewMessages[]

            return newMessagens;
 
    }
    async upldateSA(id: number): Promise<Messages> {
        const project = await this.repositoryMessage.findOneBy({
            id,
        });

        if (!project) {
            throw new AppError ("ProjectId not found");
        }
            project.msgEdt = false;
            await this.repositoryMessage.save(project);
        return project;
    }
    async delete(id: number): Promise<String> {
       
            const message = await this.repositoryMessage.findOneBy({
                id,
            });
            if (!message) {
               throw new AppError ("Message not found")
            }

            await this.repositoryMessage.delete({ id });

            io.to(message.projectId).emit("deletedMessage", { id: message.id });
            
            return  "Message deleted successfully" ;
       
    }
    async getOneMessage(id: number): Promise<Messages> {
       
        const message = await this.repositoryMessage.findOneBy({
            id,
        });
        if (!message) {
           throw new AppError ("Message not found")
        }

        

        return message;
   
}
    async getNewMessages(statusAttention: string): Promise<DtoNewMessages[]> {
        
            const selectIdClients = await this.repositoryMessage
                .createQueryBuilder("m")
                .select("m.projectId", "projectId")
                .addSelect("MAX(m.createdAt)", "latestCreatedAt")
                .groupBy("m.projectId");

            let statusChat = ''

            if (statusAttention != '') {
                statusChat = `c.statusAttention='${statusAttention}'`
            } 

            const result = await this.repositoryMessage
                .createQueryBuilder("m")
                .innerJoin(
                    `(${selectIdClients.getQuery()})`,
                    "sub",
                    "m.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt"
                )
                .leftJoin("chats", "c", "m.chatId = c.id")
                .select([
                    "m.projectId",
                    "m.createdAt",
                    "m.messages",
                    "m.id",
                    "c.supportId",
                    "c.id as chatId",
                    `CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention`,
                ])
                .where(statusChat)
                .orderBy("m.createdAt", "DESC")
                .getRawMany();
            // if (statusAttention) {
            //     result.andWhere("m.origin != :origin", { origin: 'support' });
            // }
            const newMessagens = result.map((item) => ({
                id: item.m_id,
                projectId: item.m_projectId,
                supportId: item.c_supportId,
                statusAttention: item.statusAttention,
                messages: item.m_messages,
                chatId: item.chatId,
                createdAt: item.m_createdAt,
            })) 

            return newMessagens

    }

    async getMessagesRespondingToSupport(supportId: string): Promise<DtoNewMessages[]> {
            const selectIdClients = await this.repositoryMessage
                .createQueryBuilder("m")
                .select("m.projectId", "projectId")
                .addSelect("MAX(m.createdAt)", "latestCreatedAt")
                .groupBy("m.projectId");

            const result = await this.repositoryMessage
                .createQueryBuilder("m")
                .innerJoin(
                    `(${selectIdClients.getQuery()})`,
                    "sub",
                    "m.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt"
                )
                .leftJoin("chats", "c", "m.chatId = c.id")
                .select([
                    "m.projectId",
                    "m.createdAt",
                    "m.messages",
                    "m.id",
                    "c.supportId",
                    "c.id as chatId",
                    `CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention`,
                ])
                .where("m.origin!='support'")
                .andWhere("m.supportId=:supportId", { supportId })
                .orderBy("m.createdAt", "DESC")
                .getRawMany();

            const newMessagens = result.map((item) => ({
                id: item.m_id,
                projectId: item.m_projectId,
                supportId: item.c_supportId,
                statusAttention: item.statusAttention,
                messages: item.m_messages,
                chatId: item.chatId,
                createdAt: item.m_createdAt,
            }));

            return newMessagens

        
    }

    async getSearchProject(projectId: string): Promise<DtoNewMessages[]> {
       
            const selectIdClients = await this.repositoryMessage
                .createQueryBuilder("m")
                .select("m.projectId", "projectId")
                .addSelect("MAX(m.createdAt)", "latestCreatedAt")
                .groupBy("m.projectId");


            const result = await this.repositoryMessage
                .createQueryBuilder("m")
                .innerJoin(
                    `(${selectIdClients.getQuery()})`,
                    "sub",
                    "m.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt"
                )
                .leftJoin("chats", "c", "m.chatId = c.id")
                .select([
                    "m.projectId",
                    "m.createdAt",
                    "m.messages",
                    "m.id",
                    "c.supportId",
                    "c.id as chatId",
                    `CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention`,
                ])
                .where("m.projectId=:projectId", { projectId })
                .orderBy("m.createdAt", "DESC")
                .getRawMany();
            
            const newMessagens = result.map((item) => ({
                id: item.m_id,
                projectId: item.m_projectId,
                supportId: item.c_supportId,
                statusAttention: item.statusAttention,
                messages: item.m_messages,
                chatId: item.chatId,
                createdAt: item.m_createdAt,
            }));

            return newMessagens;
       
    }

    async getSearchByWordOrPhrase(text: string, supportId: string): Promise<Messages[]> {
      
            const word = text.split(" ");

            const resultSearch = await this.repositoryMessage
                .createQueryBuilder("m")
                .where("m.supportId=:supportId", { supportId })
                .andWhere(
                    new Brackets((qb) => {
                        qb.where(`m.messages LIKE :text`, { text: `%${text}%` });

                        word.forEach((word, index) => {
                            if (index === 0) {
                                qb.orWhere(`m.messages LIKE :word`, { word: `%${word}%` });
                            } else {
                                qb.orWhere(`m.messages LIKE :word`, { word: `%${word}%` });
                            }
                        });
                    })
                )
                .orderBy("m.createdAt", "ASC")
                .getMany();

            return resultSearch;
      
    }

    getSearchGenerationToSupport(text: string, supportId: string): Promise<Messages[]> {
        throw new Error("Method not implemented.");
    }

    async uploadMedia(data: UploadDataDTO): Promise<void> {
        
            console.log(data)
            const { filename, filecontent, messages, key, userType, projectId, supportId, messageType, origin } = data
            const urlImage = await uploadToAws(filename, filecontent)

            const message = {
                userType,
                projectId,
                supportId,
                messageType,
                urlImage,
                messages,
                origin,
            }
            const msg = await this.createMessage(message)

            const datatoSocket = {
                id: msg.id,
                chatId: msg.chatId,
                key,
                userType,
                projectId,
                supportId,
                messageType,
                messages,
                urlImage,
                origin,
                createdAt: msg.createdAt
            }

            if (origin == "support") {
                io.to(projectId).emit('clientMessage', datatoSocket);
                io.to('support').emit('supportResponse', datatoSocket);

            } else {
                io.to('support').emit('supportMessage', datatoSocket);

                // if (supportId) {
                //     console.log('veio aqui upload')
                //     console.log(datatoSocket)
                //     io.to(supportId).emit('supportMessage', datatoSocket);
                //     io.to('support').emit('supportMessage', datatoSocket);

                // }else{
                //     console.log('veio aqui upload222222')
                //     console.log(datatoSocket)
                //     io.to('support').emit('supportMessage', datatoSocket);

                // }
            }

            return

       
    }


}

export {MessageRepository}