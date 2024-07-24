import { IMessageRepository } from "@modules/messages/repositories/IMessageRepositories";
import { getRepository, Repository } from "typeorm";
import { Messages } from "../Entities/Messages";
import { MessageDTO } from "@modules/messages/DTOs/messageDTO";
import { DtoNewMessages } from "@modules/messages/DTOs/newMessagesDTO";
import { UploadDataDTO } from "@modules/messages/DTOs/querysparams";
import { myDataSource } from "@main/infra/typeorm/connection/app-data-source";
import { Chats } from '@modules/chats/infra/typeorm/Entities/Chats'
import { Contacts } from '@modules/contacts/infra/typeorm/Entities/Contacts'
import {io} from '@main/infra/http/server'

class MessageRepository implements IMessageRepository {
    private repositoryMessage: Repository<Messages>
    private repositoryChat: Repository<Chats>
    private repositoryContacts: Repository<Contacts>

    constructor() {
        this.repositoryMessage = myDataSource.getRepository(Messages)
        this.repositoryChat = myDataSource.getRepository(Chats)
    }

    async createMessage(message: MessageDTO): Promise<Messages> {
        try {
            const { messageType, messages, origin, projectId, supportId, userType, urlImage } =
                message;

            const nameProject = await this.repositoryMessage.findOneBy({
                projectId,
            });

            if (!nameProject) {
                try {
                    this.repositoryContacts.create({ projectId });
                } catch (error) {
                    console.log(`Error: ${error}`);
                }
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

                const chat2 = await this.repositoryChat.save(newChat);
                chatId = chat2.id;
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
        }catch(error){
            throw new Error('');

        }
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

export {MessageRepository}