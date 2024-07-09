import { Request, Response } from 'express';
import { MessageService } from '../../services/messagenServices/messages.services';
import { MessageDTO} from '../../DTOs/message/messageDTO'
import {MockResponse} from '../util/statusfunction'
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

    public async getOneMessagesClient(req:Request, res: Response ):Promise<void>{
        try{
            const projectId = req.params.id
            const message = await messageService.getOneMessagesClient(projectId);

             res.status(200).json(message)

        }catch(error){
            res.status(400).json({message: 'Message not found '})

        }
    }
    public async getOneMessage(msgId:number ){
        const res= new MockResponse()

        try{
            
            const message:MessageDTO = await messageService.getOneMessage(msgId);

             return message
             

        }catch(error){
            res.status(400).json({message: 'Message not found '})

        }
    }
    public async getUpdateMessage(req:Request, res: Response ):Promise<void>{
        try{
            const projectId:number = parseInt(req.params.id)
            const {messages} = req.body
            const updateMessage = await messageService.getUpdateMessage(projectId,messages);

             res.status(200).json(updateMessage)

        }catch(error){
            res.status(400).json({message: 'Message not found '})

        }
    }
    public async getUpdateSocketAction(msgId:number ):Promise<void>{
        const res= new MockResponse()
        try{
            await messageService.getUpdateSocketAction(msgId);
            res.status(200).json({update: 'ok'})

        }catch(error){
            res.status(400).json({error})

        }
    }

    public async getDeleteMessage(req:Request, res: Response ):Promise<void>{
        try{
            const projectId:number = parseInt(req.params.id)
            
            const updateMessage = await messageService.getDeleteMessage(projectId);

             res.status(200).json(updateMessage)

        }catch(error){
            res.status(400).json({message: 'Message not found '})

        }
    }

    public async saveMessage( message:MessageDTO):Promise<MessageDTO | Object> {
        try{
            const newMessage = await messageService.createMessage(message);
            
            console.log(newMessage);

            return newMessage;


        }catch(error){
              const errorMessage =  { message: `Error ${error}` };

              return errorMessage;

        }

    }
}

