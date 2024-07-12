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

   
    public async getStatusAttention(id: number,supportId:string) {
        const chat = await this.chatsRepository.findOneBy({
            id
        });

        if(chat){
            chat.statusAttention = "RESPONDING"
            chat.supportId = supportId
            await this.chatsRepository.save(chat)
            return chat
        
        }else{
            return {message: "Chat not found"}
        }
       
       
    }
    public async getStatusFinished(id: number) {
        const chat = await this.chatsRepository.findOneBy({
            id
        });

        if(chat){
            chat.statusAttention = 'FINISHED'
            await this.chatsRepository.save(chat)
            return chat
        
        }else{
            return {message: "Chat not found"}
        }
       
       
    }

    public async getCreateChat(infochat:ChatDTO) {
        try{
        const {supportId,projectId,statusAttention} = await infochat
        console.log()
        const chat = await this.chatsRepository.create({
            supportId,
            projectId,
            statusAttention,
            dateIndex: new Date()
        });
        console.log(chat)

        if(chat){
            
            await this.chatsRepository.save(chat)
        
        }else{
            return {message: "Chat not creation"}
        }
       
        return chat
    }catch(error){
        console.log(error)
    }
    }



    


}
