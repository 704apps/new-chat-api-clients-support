import { Request, Response } from 'express';
import { GetNewMessagesClientUseCase } from './GetNewMessagesClientUseCase';

import {container} from 'tsyringe'


class GetNewMessagesClientController {


    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { statusAttention } = request.query

            const statusChat = statusAttention != undefined ? statusAttention : ''

            const getNewMessagesClientUseCase =   container.resolve(GetNewMessagesClientUseCase)

            const messages = await getNewMessagesClientUseCase.getNewMessages(String(statusChat));

            return  response.status(200).json(messages)

        } catch (error) {
            return response.status(400).json({ message: 'Messages not found ' })

        }
    }
}

export {GetNewMessagesClientController}
