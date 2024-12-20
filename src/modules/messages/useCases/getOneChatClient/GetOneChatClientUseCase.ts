import { myDataSource } from '../../../../main/infra/typeorm/connection/app-data-source';
import { Messages } from '../../../../modules/messages/infra/typeorm/Entities/Messages';
import { AppError } from '../../../../error/AppError';

class GetOneChatClientUseCase {
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
        try {
            const project = await this.messageRepository.findBy({
                chatId
            });

            return project

        } catch (error) {

            throw new AppError('Unexpected error', 400, { error })

        }
    }
}

export {GetOneChatClientUseCase}
