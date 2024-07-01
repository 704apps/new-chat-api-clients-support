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
    public async getMessage(messages:string): Promise<Messages[]> {
        const searchMessages =  await this.messageRepository.findBy({
            messages
        });

        return searchMessages
    }
    public async createMessage(message:MessageDTO): Promise<Messages> {
        const {messageType,messages,orige,projectId,socketId,userType} = message
        
        const newMessage = this.messageRepository.create({ messageType,messages,orige,projectId,socketId,userType });
    
        return await this.messageRepository.save(newMessage);
      
    }


}
