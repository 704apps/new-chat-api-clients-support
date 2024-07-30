import { Request, Response } from 'express';
import { GetOneMessagesClientUseCase } from './GetOneMessagesClientUseCase';

import {container} from 'tsyringe'


class GetNewMessagesController {


    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const projectId = request.params.id
            const page = parseInt(request.query.page as string, 10) || 1;
            const pageSize = 30;
            const getOneMessagesClientUseCase = container.resolve(GetOneMessagesClientUseCase)

            const message = await getOneMessagesClientUseCase.getOneMessagesClient(String(projectId), page, pageSize);

           return response.status(200).json(message)

        } catch (error) {
            return response.status(400).json({ message: 'Message not found ' })

        }
    }
}

export {GetNewMessagesController}
