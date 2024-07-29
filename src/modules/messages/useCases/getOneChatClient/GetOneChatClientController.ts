import { Request, Response } from 'express';
import { MessageService } from './GetOneChatClientUseCase';

const messageService =  new MessageService() 



class GetOneChatClientController{

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const chatId = request.params.id
            const message = await messageService.getOneMessagesClient(Number(chatId));

            return response.status(200).json(message)
            
        } catch (error) {
            
            return response.status(400).json({ error });
        }

    }


}

export {GetOneChatClientController}