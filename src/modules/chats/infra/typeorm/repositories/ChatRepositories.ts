import { Repository } from 'typeorm'
import { myDataSource } from '@main/infra/typeorm/connection/app-data-source';
import { ChatDTO } from "@modules/chats/DTOs/chatDTO";
import { IChatRepository } from "@modules/chats/repositories/IChatRepositories";
import { Chats } from "../Entities/Chats";
import { io } from '@main/infra/http/server';
import { AppError } from '@error/AppError';



class ChatRepository implements IChatRepository {
    private repositoryChat: Repository<Chats>;

    constructor() {
        this.repositoryChat = myDataSource.getRepository(Chats)
    }

    async getStatusAttention(id: number, supportId: string): Promise<Chats> {
        const chat = await this.repositoryChat.findOneBy({
            id
        });

        if (!chat) {
            throw new AppError('Chat not found')
        }

        chat.statusAttention = "RESPONDING"
        chat.supportId = supportId
        await this.repositoryChat.save(chat)
        return chat



    }
    async updateStatusFinished(id: number): Promise<Chats> {
        const chat = await this.repositoryChat.findOneBy({
            id
        });

        if (!chat) {
            throw new AppError('Chat not found')
        }
        chat.statusAttention = 'FINISHED'
        await this.repositoryChat.save(chat)

        io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention });


        return chat

    }
    async updateStatusOpen(id: number, supportId: string): Promise<Chats> {
        const chat = await this.repositoryChat.findOneBy({
            id
        })
        if (!chat) {
            throw new AppError('Chat not found')
        }

        chat.statusAttention = 'OPEN'
        chat.supportId = supportId
        await this.repositoryChat.save(chat)
        await io.to('support').emit('statusChat', { chatId: chat.id, statusChat: chat.statusAttention });


        return chat
    }
    async getCreateChat(infochat: ChatDTO): Promise<Chats> {
        const { supportId, projectId, statusAttention } = await infochat
        const chat = await this.repositoryChat.create({
            supportId,
            projectId,
            statusAttention,
            dateIndex: new Date()
        });
        const chatCreated = await this.repositoryChat.save(chat)

        return chatCreated
    }

}

export {ChatRepository}