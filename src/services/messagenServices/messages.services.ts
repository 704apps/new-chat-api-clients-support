import { myDataSource } from '../../infra/typeorm/connection/app-data-source';
import { Messages } from '../../infra/typeorm/Entities/Messages';
import { MessageDTO} from '../../DTOs/messageDTO'

export class MessageService {

    constructor() {
        //Verifica se a conexão estabelicida antes de obter acesso a entidade. 
        if(!myDataSource.isInitialized){
            myDataSource.initialize().then(()=>{
                this.messageRepository = myDataSource.getRepository(Messages);
            }).catch(error=> console.error("Error ao incializar a conexão:",error))
        }
    }
    private messageRepository = myDataSource.getRepository(Messages);

    public async getAllMessages(): Promise<Messages[]> {
        return await this.messageRepository.find();
    }
    public async getOneMessage(projectId:string): Promise<Messages[]> {
        const project =  await this.messageRepository.findBy({
            projectId
        });

        return project
    }
    public async getNewMessages(): Promise<Messages[]> {
        
        const subQuery = await this.messageRepository
          .createQueryBuilder('m')
          .select('m.projectId', 'projectId')
          .addSelect('MAX(m.createdAt)', 'latestCreatedAt')
          .groupBy('m.projectId');
    
        const result = await this.messageRepository
          .createQueryBuilder('m')
          .innerJoin(
            `(${subQuery.getQuery()})`,
            'sub',
            'm.projectId = sub.projectId AND m.createdAt = sub.latestCreatedAt',
          )
          .select(['m.projectId', 'm.createdAt'])
          .getRawMany();
    
        return result;
    }

    public async createMessage(message:MessageDTO): Promise<Messages> {
        const {messageType,messages,orige,projectId,socketId,userType} = message
        
        const newMessage = this.messageRepository.create({ messageType,messages,orige,projectId,socketId,userType });
    
        return await this.messageRepository.save(newMessage);
      
    }


}
