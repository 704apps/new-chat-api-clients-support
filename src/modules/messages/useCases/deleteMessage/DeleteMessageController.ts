import { Request, Response } from 'express';

import { DeleteMessageUseCase } from './DeleteMessageUseCase'
import { container } from 'tsyringe'


class DeleteMessageController {


    async handle(request: Request, response: Response): Promise<Response> {
        try {

            const idMessage = request.params.id as unknown as number
            const deleteMessageUseCase = await container.resolve(DeleteMessageUseCase)
            await deleteMessageUseCase.delete(idMessage)

            return response.status(200).json('Message deleted successfully')

        } catch (error) {
            
            return response.status(400).json({ error });

        }
    }
}

export {DeleteMessageController}