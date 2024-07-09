import { myDataSource } from '../../infra/typeorm/connection/app-data-source';
import { Messages } from '../../infra/typeorm/Entities/Messages';
import { Contacts } from '../../infra/typeorm/Entities/Contacts';
import { Users } from '../../infra/typeorm/Entities/Users';
import { MessageDTO } from '../../DTOs/message/messageDTO'

export class MessageService {

    constructor() {
        //Verifica se a conexão estabelicida antes de obter acesso a entidade. 
        if (!myDataSource.isInitialized) {
            myDataSource.initialize().then(() => {
                this.messageRepository = myDataSource.getRepository(Messages);
            }).catch(error => console.error("Error ao incializar a conexão:", error))
        }
    }

    private messageRepository = myDataSource.getRepository(Messages);
    private contactsepository = myDataSource.getRepository(Contacts);

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

    public async getUpdateMessage(id: number,messages:string) {
        const project = await this.messageRepository.findOneBy({
            id
        });

        if(project){
            project.messages = messages
            project.msgEdt = true
            await this.messageRepository.save(project)
        
        }else{
            return {message: "ProjectId not found"}
        }
       

        return project
    }

    public async getUpdateSocketAction(id: number) {
        const project = await this.messageRepository.findOneBy({
            id
        });

        if(project){
            project.msgEdt = false
            await this.messageRepository.save(project)
        
        }else{
            return {message: "ProjectId not found"}
        }
       

        return project
    }


    public async getDeleteMessage(id: number) {
   
        try {
            const message = await this.messageRepository.findOneBy({
                id
            });
            if(!message){
                return {message:"Message not found"} 

            }

            await this.messageRepository.delete({id})


            return {message:"Message deleted successfully"} 

            
        } catch (error) {
            return {error:"Error when deleting"}
        }
       

        
    }

    public async getNewMessages() {


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

            .select(['m.projectId', 'm.createdAt', 'm.messages','m.id'])
            .orderBy('m.createdAt','DESC')
            .getRawMany();

        const newMessagens = result.map(item => ({
            id: item.m_id,
            projectId: item.m_projectId,
            messages: item.m_messages,
            createdAt: item.m_createdAt
            


        }));;

        return newMessagens
    }

    public async createMessage(message: MessageDTO): Promise<Messages> {
        const { messageType, messages, orige, projectId, socketId, userType } = message


        const nameProject = await this.messageRepository.findOneBy({
            projectId
        })

        if (!nameProject) {

            try {
                this.contactsepository.create({ projectId });

            } catch (error) {
                console.log(`Error: ${error}`)
            }

        }


        const newMessage = this.messageRepository.create({ messageType, messages, orige, projectId, socketId, userType });

        return await this.messageRepository.save(newMessage);

    }


}
