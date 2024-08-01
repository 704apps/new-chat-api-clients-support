import { Request, Response } from 'express';
import { GetChatsRespondingToSupportUseCase } from './getChatsRespondingToSupportUseCase';

import { container } from 'tsyringe'


class GetChatsRespondingToSupportController {


    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { supportId } = request.query

            const getChatsRespondingToSupportUseCase = container.resolve(GetChatsRespondingToSupportUseCase)

            const messages = await getChatsRespondingToSupportUseCase.getChatsRespondingToSupport(String(supportId));

            return response.status(200).json(messages)

        } catch (error) {

            return response.status(400).json({ error });

        }
    }
}

export { GetChatsRespondingToSupportController }
