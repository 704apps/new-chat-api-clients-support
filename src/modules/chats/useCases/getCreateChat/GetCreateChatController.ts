import { Request, Response } from 'express';

import { GetCreateChatUseCase } from './GetCreateChatUseCase'
import { container } from 'tsyringe'
import { ChatDTO } from '@modules/chats/DTOs/chatDTO';


class GetCreateChatController {

    async handle(request: Request, response: Response): Promise<Response> {
        try {

            const dataForChatCreation: ChatDTO = request.body
            
            const getCreateChatUseCase = await container.resolve(GetCreateChatUseCase)
            const chat = await getCreateChatUseCase.getCreateChat(dataForChatCreation)

            return response.status(200).json(chat)

        } catch (error) {

            return response.status(400).json({ error });

        }
    }
}

export { GetCreateChatController }