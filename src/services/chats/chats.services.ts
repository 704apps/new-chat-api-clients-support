import { ChatDTO } from '../../DTOs/chat/chatDTO';
import { myDataSource } from '../../infra/typeorm/connection/app-data-source';
import { Chats } from '../../infra/typeorm/Entities/Chats';

export class ChatService {
    private chatsRepository = myDataSource.getRepository(Chats);

    constructor() {
        //Verifica se a conexão estabelicida antes de obter acesso a entidade. 
        if (!myDataSource.isInitialized) {
            myDataSource.initialize().then(() => {
                this.chatsRepository = myDataSource.getRepository(Chats);
            }).catch(error => console.error("Error ao incializar a conexão:", error))
        }
    }

   
    public async getStatusAttention(id: number,statusAttention:string) {
        const chat = await this.chatsRepository.findOneBy({
            id
        });

        if(chat){
            chat.statusAttention = statusAttention
            await this.chatsRepository.save(chat)
            return {message: "Status updated successfully."}
        
        }else{
            return {message: "Chat not found"}
        }
       
        return chat
    }

    public async getCreateChat(infochat:ChatDTO) {
        
        const {supportId,projectId,statusAttention} = await infochat
        
        const chat = await this.chatsRepository.create({
            supportId,
            projectId,
            statusAttention,
            dateIndex: new Date()
        });

        if(chat){
            chat.statusAttention = statusAttention
            await this.chatsRepository.save(chat)
        
        }else{
            return {message: "Chat not creation"}
        }
       
        return chat
    }


    


}
