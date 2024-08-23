import { Request, Response } from 'express';
import { GetNewMessagesUseCase } from './GetNewMessagesUseCase';

import {container} from 'tsyringe'


class GetNewMessagesController {


    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { statusAttention } = request.query

            const statusChat = statusAttention !== undefined ? statusAttention : ''

            const getNewMessagesUseCase =   container.resolve(GetNewMessagesUseCase)

            const messages = await getNewMessagesUseCase.getNewMessages(String(statusChat));

            return  response.status(200).json(messages)

        } catch (error) {
            return response.status(400).json({error});

        }
    }
}

export {GetNewMessagesController}
