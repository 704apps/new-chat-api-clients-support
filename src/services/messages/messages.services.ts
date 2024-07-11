import { myDataSource } from '../../infra/typeorm/connection/app-data-source';
import { Messages } from '../../infra/typeorm/Entities/Messages';
import { Contacts } from '../../infra/typeorm/Entities/Contacts';
import { Chats } from '../../infra/typeorm/Entities/Chats';
import { MessageDTO } from '../../DTOs/message/messageDTO'
import {ChatService } from '../chats/chats.services'
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

    public async getOneMessagesClient(projectId: string): Promise<Messages[]> {
        const project = await this.messageRepository.findBy({
            projectId
        });

        return project
    }

    public async getOneMessage(id: number): Promise<MessageDTO> {

        const project = await this.messageRepository.findOneBy({
            id
        })

        const projetcResult: MessageDTO = project as unknown as MessageDTO

        return projetcResult

    }

    public async getUpdateMessage(id: number, messages: string) {
        const project = await this.messageRepository.findOneBy({
            id
        });

        if (project) {
            project.messages = messages
            project.msgEdt = true
            await this.messageRepository.save(project)

        } else {
            return { message: "ProjectId not found" }
        }


        return project
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
                    'm.projectId = c.projectId AND m.supportId = c.supportId'
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
                console.log(result)
            const newMessagens = result.map(item => ({
                id: item.m_id,
                projectId: item.m_projectId,
                supportId: item.supportId,
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
    public async getSearchMessages() {
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
                            'm.projectId = c.projectId AND m.supportId = c.supportId'
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
                console.log(result)
            const newMessagens = result.map(item => ({
                id: item.m_id,
                projectId: item.m_projectId,
                supportId: item.supportId,
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
    public async createMessage(message: MessageDTO): Promise<Messages> {
        const { messageType, messages, orige, projectId, supportId, socketId, userType } = message
        

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

        const sID = supportId===null  || supportId==='' || supportId===undefined ? '' :supportId
        
        const chatId =  this.chatRepository.createQueryBuilder('chat')
            .where('chat.statusAttention=:status',{status:'Open'})
            .andWhere('chat.projectId=:projectId',{projectId})
            .getOne()

        if(!chatId){
           await this.chatRepository.create({
            supportId: sID, projectId, statusAttention:'OPEN', dateIndex: new Date()
           })
        }

        const newMessage = this.messageRepository.create({ messageType, messages, orige, projectId, supportId:sID, socketId, userType });
        
      

        return await this.messageRepository.save(newMessage);

    }


}
