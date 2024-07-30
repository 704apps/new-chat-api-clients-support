import { Request, Response } from 'express';

import { UpdateStatusOpenUseCase } from './UpdateStatusOpenUseCase'
import { container } from 'tsyringe'


class DeleteMessageController {


    async handle(request: Request, response: Response): Promise<Response> {
        try {

            const idChat = request.params.id as unknown as number
            const {supportId} = request.query

            const updateStatusOpenUseCase = await container.resolve(UpdateStatusOpenUseCase)
            await updateStatusOpenUseCase.updateStatusOpen(idChat,String(supportId))

            return response.status(200).json({chat:updateStatusOpenUseCase})

        } catch (error) {
            
            return response.status(400).json({ error });

        }
    }
}

export {DeleteMessageController}