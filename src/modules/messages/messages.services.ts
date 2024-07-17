import { Brackets } from 'typeorm'
import { myDataSource } from '../../infra/typeorm/connection/app-data-source';
import { Messages } from '../../infra/typeorm/Entities/Messages';
import { Contacts } from '../../infra/typeorm/Entities/Contacts';
import { Chats } from '../../infra/typeorm/Entities/Chats';
import { MessageDTO } from '../../DTOs/message/messageDTO'
import { ChatDTO } from '../../DTOs/chat/chatDTO'
import { io } from '../../infra/http/server';

export class MessageService {
    private messageRepository = myDataSource.getRepository(Messages);

    constructor() {
        //Verifica se a conexão estabelicida antes de obter acesso a entidade. 
        if (!myDataSource.isInitialized) {
            myDataSource.initialize().then(() => {
                this.messageRepository = myDataSource.getRepository(Messages);
            }).catch(error => console.error("Error ao incializar a conexão:", error))
        }
    }

    private contactsRepository = myDataSource.getRepository(Contacts);
    private chatRepository = myDataSource.getRepository(Chats);

    public async getAllMessages(): Promise<Messages[]> {
        return await this.messageRepository.find();
    }

    public async getOneMessagesClient(projectId: string, supportId: string, page: number, pageSize: number) {
        const skip = (page - 1) * pageSize

        const project = await this.messageRepository
            .createQueryBuilder('m')
            .where('m.supportId=:supportId', { supportId })
            .andWhere('m.projectId=:projectId', { projectId })
            // .skip(skip)
            // .take(pageSize)
            .orderBy('m.createdAt', 'ASC')
            .getMany()

        return project
    }

    public async getOneMessage(id: number): Promise<MessageDTO> {

        const project = await this.messageRepository.findOneBy({
            id
        })

        const projetcResult: MessageDTO = project as unknown as MessageDTO

        return projetcResult

    }

    public async getUpdateMessage(id: number, messages: string): Promise<MessageDTO> {
        const project = await this.messageRepository.findOneBy({
            id
        });

        if (project) {
            project.messages = messages
            project.msgEdt = true
            await this.messageRepository.save(project)

        }

        return project as MessageDTO

    }

    public async getUpdateSocketAction(id: number) {
        const project = await this.messageRepository.findOneBy({
            id
        });

        if (project) {
            project.msgEdt = false
            await this.messageRepository.save(project)

        } else {
            return { message: "ProjectId not found" }
        }


        return project
    }


    public async getDeleteMessage(id: number) {

        try {
            const message = await this.messageRepository.findOneBy({
                id
            });
            if (!message) {
                return { message: "Message not found" }

            }


            await this.messageRepository.delete({ id })

            io.to(message.projectId).emit('deletedMessage', { id: message.id })

            return { message: "Message deleted successfully" }


        } catch (error) {
            return { error: "Error when deleting" }
        }



    }

    public async getNewMessages() {
        try {
            const selectIdClients = await this.messageRepository
                .createQueryBuilder('m')
                .select('m.projectId', 'projectId')
                .addSelect('MAX(m.createdAt)', 'latestCreatedAt')
                .groupBy('m.projectId')

            const result = await this.messageRepository
                .createQueryBuilder('m')
                .innerJoin(
                    `(${selectIdClients.getQuery()})`,
                    'sub',
                    'm.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt',
                )
                .leftJoin(
                    'chats',
                    'c',
                    'm.chatId = c.id'
                )
                .select(['m.projectId',
                    'm.createdAt',
                    'm.messages',
                    'm.id',
                    'c.supportId',
                    'c.id as chatId',
                    `CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention`
                ])
                .orderBy('m.createdAt', 'DESC')
                .getRawMany();

            const newMessagens = result.map(item => ({
                id: item.m_id,
                projectId: item.m_projectId,
                supportId: item.c_supportId,
                statusAttention: item.statusAttention,
                messages: item.m_messages,
                chatId: item.chatId,
                createdAt: item.m_createdAt
            }));

            return newMessagens

        } catch (error) {
            console.log(error)
        }
    }
    public async getNes() {
        try {
            const selectIdClients = await this.messageRepository
                .createQueryBuilder('m')
                .select('m.projectId', 'projectId')
                .addSelect('MAX(m.createdAt)', 'latestCreatedAt')
                .groupBy('m.projectId')

            const result = await this.messageRepository
                .createQueryBuilder('m')
                .innerJoin(
                    `(${selectIdClients.getQuery()})`,
                    'sub',
                    'm.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt',
                )
                .leftJoin(
                    'chats',
                    'c',
                    'm.chatId = c.id'
                )
                .select(['m.projectId',
                    'm.createdAt',
                    'm.messages',
                    'm.id',
                    'c.supportId',
                    'c.id as chatId',
                    `CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention`
                ])
                .where("m.origin!='support'")
                .orderBy('m.createdAt', 'DESC')
                .getRawMany();

            const newMessagens = result.map(item => ({
                id: item.m_id,
                projectId: item.m_projectId,
                supportId: item.c_supportId,
                statusAttention: item.statusAttention,
                messages: item.m_messages,
                chatId: item.chatId,
                createdAt: item.m_createdAt
            }));

            return newMessagens

        } catch (error) {
            console.log(error)
        }
    }
    public async getChatsRespondingToSupport(supportId: string) {
        try {
            const selectIdClients = await this.messageRepository
                .createQueryBuilder('m')
                .select('m.projectId', 'projectId')
                .addSelect('MAX(m.createdAt)', 'latestCreatedAt')
                .groupBy('m.projectId')

            const result = await this.messageRepository
                .createQueryBuilder('m')
                .innerJoin(
                    `(${selectIdClients.getQuery()})`,
                    'sub',
                    'm.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt',
                )
                .leftJoin(
                    'chats',
                    'c',
                    'm.chatId = c.id'
                )
                .select(['m.projectId',
                    'm.createdAt',
                    'm.messages',
                    'm.id',
                    'c.supportId',
                    'c.id as chatId',
                    `CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention`
                ])
                .where("m.origin!='support'")
                .andWhere("m.supportId=:supportId", { supportId })
                .orderBy('m.createdAt', 'DESC')
                .getRawMany();

            const newMessagens = result.map(item => ({
                id: item.m_id,
                projectId: item.m_projectId,
                supportId: item.c_supportId,
                statusAttention: item.statusAttention,
                messages: item.m_messages,
                chatId: item.chatId,
                createdAt: item.m_createdAt
            }));

            return newMessagens

        } catch (error) {
            console.log(error)
        }
    }
    public async getSearchProject(projectId: string) {
        try {
            const selectIdClients = await this.messageRepository
                .createQueryBuilder('m')
                .select('m.projectId', 'projectId')
                .addSelect('MAX(m.createdAt)', 'latestCreatedAt')
                .groupBy('m.projectId')
        

            const result = await this.messageRepository
                .createQueryBuilder('m')
                .innerJoin(
                    `(${selectIdClients.getQuery()})`,
                    'sub',
                    'm.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt',
                )
                .leftJoin(
                    'chats',
                    'c',
                    'm.chatId = c.id'
                )
                .select(['m.projectId',
                    'm.createdAt',
                    'm.messages',
                    'm.id',
                    'c.supportId',
                    'c.id as chatId',
                    `CASE WHEN c.statusAttention IS NULL THEN 'OPEN' ELSE c.statusAttention END AS statusAttention`
                ])
                .where("m.origin!='support'")
                .andWhere("m.projectId=:projectId",{projectId})
                .orderBy('m.createdAt', 'DESC')
                .getRawMany();
                console.log('selectIdClients')
                console.log(result)
            const newMessagens = result.map(item => ({
                id: item.m_id,
                projectId: item.m_projectId,
                supportId: item.c_supportId,
                statusAttention: item.statusAttention,
                messages: item.m_messages,
                chatId: item.chatId,
                createdAt: item.m_createdAt
            }));

            return newMessagens

        } catch (error) {
            console.log(error)
        }
    }
    public async getSearchByWordOrPhrase(text: string, supportId: string) {
        try {
            const word = text.split(' ');

            const resultSearch = await this.messageRepository.createQueryBuilder('m')
                .where('m.supportId=:supportId', { supportId })
                .andWhere(new Brackets(qb => {
                    qb.where(`m.messages LIKE :text`, { text: `%${text}%` })

                    word.forEach((word, index) => {
                        if (index === 0) {
                            qb.orWhere(`m.messages LIKE :word`, { word: `%${word}%` });
                        } else {
                            qb.orWhere(`m.messages LIKE :word`, { word: `%${word}%` });

                        }
                    })
                }))
                .orderBy('m.createdAt', 'ASC')
                .getMany();

            return resultSearch


        } catch (error) {
            console.log(error)
        }
    }

    public async getSearchGenerationToSupport(text: string, supportId: string) {
        try {
            const word = text.split(' ');

            const resultSearch = await this.messageRepository.createQueryBuilder('m')
                .where('m.supportId = :supportId', { supportId })
                .andWhere(new Brackets(qb => {
                    qb.andWhere("CONCAT(m.projectId, ' ', m.messages) LIKE :text", { text: `%${text}%` });
                    word.forEach((word, index) => {
                        if (index === 0) {
                            qb.orWhere("CONCAT(m.projectId, ' ' , m.messages) LIKE :word0", { word0: `%${word}%` });
                        } else {
                            qb.orWhere(`CONCAT(m.projectId, ' ', m.messages) LIKE :word${index}`, { [`word${index}`]: `%${word}%` });
                        }
                    });
                }))
                .orderBy('m.createdAt', 'ASC')
                .getMany();



            return resultSearch

        } catch (error) {
            console.log(error)
        }
    }

    public async getSearchGenerationToAdmin(text: string, supportId: string) {
        try {

            const resultSearch = await this.messageRepository.createQueryBuilder('m')
                .where(`CONCAT(m.projectId," ",m.messages ) LIKE %${text}%`)
                .orderBy('m.createdAt', 'ASC')
                .getMany();

            return resultSearch

        } catch (error) {
            console.log(error)
        }
    }

    public async createMessage(message: MessageDTO): Promise<Messages> {

        const { messageType, messages, origin, projectId, supportId, userType } = message

        const nameProject = await this.messageRepository.findOneBy({
            projectId
        })

        if (!nameProject) {

            try {
                this.contactsRepository.create({ projectId });

            } catch (error) {
                console.log(`Error: ${error}`)
            }

        }

        // const sID = supportId === null || supportId === '' || supportId === undefined ? '' : supportId

        const chat = await this.chatRepository.createQueryBuilder('chat')
            .where('chat.projectId = :projectId', { projectId })
            .andWhere('chat.statusAttention IN (:...status)', { status: ['OPEN', 'RESPONDING'] }) // Condição para o status
            .getOne();

        let chatId = chat?.id

        if (!chat) {
            console.log('veio aqui com a mensagem')
            const newChat = await this.chatRepository.create({
                supportId: supportId, projectId, statusAttention: 'OPEN', dateIndex: new Date()
            })

            const chat2 = await this.chatRepository.save(newChat)
            chatId = chat2.id

        } else {
            if (origin == 'support' && !chat.supportId) {
                chat.supportId = supportId
                chat.statusAttention = 'RESPONDING'
                await this.chatRepository.save(chat)
                console.log('aaaaaaaaaaaa')
                await io.to('support').emit('statusChat', {statusAttention : 'RESPONDING'});

                //Atualiza na tabela de mensagem qual suporte está atendendo
                await this.messageRepository.createQueryBuilder()
                    .update(Messages)
                    .set({ supportId: supportId })
                    .where("chatId = :chatId", { chatId: chat.id })
                    .execute()

            } else if (origin == 'support' && chat.supportId) {
                if (chat.supportId != supportId) {
                    chat.supportId = supportId
                    await this.chatRepository.save(chat)

                }
            }
        }

        const newMessage = this.messageRepository.create({ messageType, chatId, messages, origin, projectId, supportId, userType });

        return await this.messageRepository.save(newMessage);

    }


}
