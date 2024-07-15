import { Request, Response } from 'express';
import { MessageService } from './GetOneChatClientUseCase';

const messageService =  new MessageService() 



export class MessageController{
    

    public async getOneMessagesClient(req:Request, res: Response ):Promise<void>{
        try{
            const chatId = req.params.id
            const message = await messageService.getOneMessagesClient(Number(chatId));

             res.status(200).json(message)

        }catch(error){
            res.status(400).json({message: 'Message not found '})

        }
    }
}