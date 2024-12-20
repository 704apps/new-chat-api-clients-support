import { Request, Response } from 'express';

import { UpdateStatusFinishedUseCase } from './UpdateStatusFinishedUseCase'
import { container } from 'tsyringe'


class UpdateStatusFinishedController {


    async handle(request: Request, response: Response): Promise<Response> {
        try {

            const idChat = request.params.id as unknown as number

            const updateStatusFinishedUseCase = await container.resolve(UpdateStatusFinishedUseCase)
            await updateStatusFinishedUseCase.updateStatusFinished(idChat)

            return response.status(200).json(updateStatusFinishedUseCase)

        } catch (error) {
            
            return response.status(400).json({ error });

        }
    }
}

export {UpdateStatusFinishedController}