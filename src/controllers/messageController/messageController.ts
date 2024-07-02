import { Request, Response } from 'express';
import { MessageService } from '../../services/messagenServices/messages.services';
import { MessageDTO} from '../../DTOs/messageDTO'

const messageService =  new MessageService() 

interface dataSocket {
    userType: string,
    socketId: string,
    projectId: string,
    messageType: string,
    messages: string,
    orige: string
}

export class MessageController{
    
    public async getMessages(req:Request, res: Response):Promise<void>{
        try{
            const message = await messageService.getNewMessages();

            res.json(message)
        }catch(error){
            res.status(500).json({message: 'Message not found '})

        }
    }

    public async getOneMessage(req:Request, res: Response ):Promise<void>{
        try{
            const projectId = req.params.id
            const message = await messageService.getOneMessage(projectId);

            res.json(message)

        }catch(error){
            res.status(500).json({message: 'Message not found '})

        }
    }
    public async saveMessage(message:MessageDTO){
       
        return await messageService.createMessage(message);
    }
}

