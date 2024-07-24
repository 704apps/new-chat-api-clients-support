import { Brackets } from 'typeorm'
import { myDataSource } from 'main/infra/typeorm/connection/app-data-source';
import { Messages } from '@modules/messages/infra/typeorm/Entities/Messages';
import { Contacts } from '@modules/contacts/infra/typeorm/Entities/Contacts';
import { Chats } from '@modules/chats/infra/typeorm/Entities/Chats';

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
