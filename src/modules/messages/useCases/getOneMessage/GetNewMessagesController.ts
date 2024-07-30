import { Request, Response } from 'express';
import { GetOneMessagesClientUseCase } from './GetOneMessagesUseCase';

import {container} from 'tsyringe'


class GetOneMessagesClientController {


    public async handle(request: Request, response: Response): Promise<Response> {
        try {

            const idMessage = request.params.id as unknown as number

            const getNewMessagesClientUseCase =   container.resolve(GetOneMessagesClientUseCase)

            const messages = await getNewMessagesClientUseCase.getOneMessage(idMessage);

            return   response.status(200).json(messages)

        } catch (error) {

            return response.status(400).json({ error })

        }
    }
}

export {GetOneMessagesClientController}
