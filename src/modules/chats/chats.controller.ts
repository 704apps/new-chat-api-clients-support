import { Request, Response } from 'express';

import { ChatService } from './chats.services';
// import {MockResponse} from '../util/statusfunction'
import { ChatDTO } from './DTOs/chatDTO';
const chatService =  new ChatService() 


export class ChatController{
    
    public async getUpdateStatusAttention(req:Request, res: Response ):Promise<void>{
        try{

            const chatId:number = Number(req.params.id)

            const {supportId} = req.body

            const chat = await chatService.getStatusAttention(chatId,supportId);
            res.status(200).json(chat)

        }catch(error){
            res.status(400).json({error})

        }
    } 
    public async updateStatusFinished(req:Request, res: Response ):Promise<void>{
        try{

            const chatId:number = Number(req.params.id)
            const chat = await chatService.updateStatusFinished(chatId);

            res.status(200).json(chat)

        }catch(error){
            res.status(400).json({error})

        }
    } 

    public async updateStatusOpen(req:Request, res: Response ):Promise<void>{
        try{

            const chatId:number = Number(req.params.id)
            const {supportId} = (req.query)

            const chat = await chatService.updateStatusOpen(chatId,String(supportId));

            res.status(200).json(chat)

        }catch(error){
            res.status(400).json({error})

        }
    } 
    
    public async getCreateChat(req:Request, res: Response ):Promise<void>{
        try{
            const data:ChatDTO = req.body

            const chat = await chatService.getCreateChat(data);
            res.status(200).json(chat)

        }catch(error){
            res.status(400).json({error})

        }
    }

}

