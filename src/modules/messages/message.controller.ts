import { Request, Response } from 'express';
import { MessageService } from './messages.services';
import { MessageDTO } from './DTOs/messageDTO'
import { MockResponse } from '../util/statusfunction'
import { QuerySearchGeneral, QuerySearchProject, QuerySearchWordPhrase, UploadDataDTO } from './DTOs/querysparams'
const messageService = new MessageService()

import { io } from '../../main/infra/http/server'

export class MessageController {

    public async getMessages(req: Request, res: Response): Promise<void> {
        try {
            const { statusAttention } = req.query
            const statusChat = statusAttention!=undefined ? statusAttention: ''

            const messages = await messageService.getNewMessages(String(statusChat));

            res.status(200).json(messages)

        } catch (error) {
            res.status(400).json({ message: 'Messages not found ' })

        }
    }

    public async getChatsRespondingToSupport(req: Request, res: Response): Promise<void> {
        try {

            const supportId = req.params.id
            console.log(supportId)

            const messages = await messageService.getChatsRespondingToSupport(supportId);

            res.status(200).json(messages)
        } catch (error) {
            res.status(400).json({ message: 'Messages not found ' })

        }
    }

    public async getOneMessagesClient(req: Request, res: Response): Promise<void> {
        try {
            const projectId = req.params.id
            const page = parseInt(req.query.page as string, 10) || 1;
            //const supportId = req.query.supportId 
            const pageSize = 30;
            const message = await messageService.getOneMessagesClient(String(projectId), page, pageSize);

            res.status(200).json(message)

        } catch (error) {
            res.status(400).json({ message: 'Message not found ' })

        }
    }
    public async getOneMessage(msgId: number) {
        const res = new MockResponse()

        try {

            const message: MessageDTO = await messageService.getOneMessage(msgId);

            return message


        } catch (error) {
            res.status(400).json({ message: 'Message not found ' })

        }
    }
    public async getUpdateMessage(req: Request, res: Response): Promise<void> {
        try {
            const projectId: number = parseInt(req.params.id)
            const { messages } = req.body
            const updateMessage: MessageDTO = await messageService.getUpdateMessage(projectId, messages);


            if (updateMessage.origin === 'support') {
                console.log('veio aqui')
                await io.to(updateMessage.projectId).emit('supportMsgUpdate', { id: updateMessage.id, updatedMessage: updateMessage.messages });
            } else {
                await io.to(updateMessage.supportId).emit('supportMsgUpdate', { id: updateMessage.id, updatedMessage: updateMessage.messages });
            }

            res.status(200).json(updateMessage)

        } catch (error) {
            res.status(400).json({ message: 'Message not found ' })

        }
    }
    public async getUpdateSocketAction(msgId: number): Promise<void> {
        const res = new MockResponse()
        try {
            await messageService.getUpdateSocketAction(msgId);
            res.status(200).json({ update: 'ok' })

        } catch (error) {
            res.status(400).json({ error })

        }
    }

    public async getDeleteMessage(req: Request, res: Response): Promise<void> {
        try {
            const projectId: number = parseInt(req.params.id)

            const updateMessage = await messageService.getDeleteMessage(projectId);

            res.status(200).json(updateMessage)

        } catch (error) {
            res.status(400).json({ message: 'Message not found ' })

        }
    }

    public async getFilterToStatusSidebar(req: Request, res: Response): Promise<void> {
        try {
            const { statusAttention } = req.query
            const updateMessage = await messageService.getFilterToStatusSidebar(String(statusAttention));

            res.status(200).json(updateMessage)

        } catch (error) {
            res.status(400).json({ message: 'Message not found ' })

        }
    }
    public async getSearchProject(req: Request, res: Response): Promise<void> {
        try {
            const { project } = req.query
            console.log(project)
            const updateMessage = await messageService.getSearchProject(String(project));

            res.status(200).json(updateMessage)

        } catch (error) {
            res.status(400).json({ message: 'Message not found ' })

        }
    }
    public async getSearchByWordOrPhrase(req: Request, res: Response): Promise<void> {
        try {
            const { word_phrase, supportId } = req.query as unknown as QuerySearchWordPhrase
            console.log(word_phrase, supportId)

            const updateMessage = await messageService.getSearchByWordOrPhrase(word_phrase, supportId);

            res.status(200).json(updateMessage)

        } catch (error) {
            res.status(400).json({ message: 'Message not found ' })

        }
    }
    public async getSearchGenerationToSupport(req: Request, res: Response): Promise<void> {
        try {
            const { general, supportId } = req.query as unknown as QuerySearchGeneral
            console.log(general, supportId)
            const updateMessage = await messageService.getSearchGenerationToSupport(general, supportId);

            res.status(200).json(updateMessage)

        } catch (error) {
            res.status(400).json({ message: 'Message not found ' })

        }
    }

    public async getSearchGenerationToAdmin(req: Request, res: Response): Promise<void> {
        try {
            const { word_phrase, supportId } = req.query as unknown as QuerySearchWordPhrase

            const updateMessage = await messageService.getSearchGenerationToAdmin(word_phrase, supportId);

            res.status(200).json(updateMessage)

        } catch (error) {
            res.status(400).json({ message: 'Message not found ' })

        }

    }


    public async uploadFile(req: Request, res: Response): Promise<void> {
        try {

            const file = await req.file
            const dataBody: UploadDataDTO = await req.body

            if (file) {
                dataBody.filecontent = file.buffer
                dataBody.filename = file.originalname
                await messageService.uploadMedia(dataBody)

            }


            res.status(200).json('Ok')

        } catch (error) {
            res.status(400).json({ error: error })
        }




    }

    public async saveMessage(message: MessageDTO): Promise<MessageDTO | Object> {
        try {
            const newMessage = await messageService.createMessage(message);

            return newMessage;


        } catch (error) {
            const errorMessage = { message: `Error ${error}` };

            return errorMessage;

        }

    }
}

