import { Brackets } from 'typeorm'
import { myDataSource } from 'infra/typeorm/connection/app-data-source';
import { Messages } from 'infra/typeorm/Entities/Messages';

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

    public async getOneMessagesClient(chatId: number): Promise<Messages[]> {
        const project = await this.messageRepository.findBy({
            chatId
        });

        return project
    }

  

}
