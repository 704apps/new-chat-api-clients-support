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
            const messages = await messageService.getNewMessages();

            res.status(200).json(messages)
        }catch(error){
            res.status(400).json({message: 'Messages not found '})

        }
    }

    public async getOneMessage(req:Request, res: Response ):Promise<void>{
        try{
            const projectId = req.params.id
            const message = await messageService.getOneMessage(projectId);

            res.status(200).json(message)

        }catch(error){
            res.status(400).json({message: 'Message not found '})

        }
    }
    public async saveMessage( message:MessageDTO){
        try{
            const newMessage = await messageService.createMessage(message);
            
            
            return newMessage;


        }catch(error){
              const errorMessage =  { message: `Error ${error}` };

              return errorMessage;

        }

    }
}

