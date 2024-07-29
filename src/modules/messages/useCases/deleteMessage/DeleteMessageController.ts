import { Request, Response } from 'express';

import { UpdateMessageUseCase } from './DeleteMessageUseCase'
import { container } from 'tsyringe'


export class MessageService {


    async handle(request: Request, response: Response): Promise<Response> {
        try {

            const idMessage = request.params.id as unknown as number
            const updateMessageUseCase = await container.resolve(UpdateMessageUseCase)
            await updateMessageUseCase.delete(idMessage)

            return response.status(200).json('Message deleted successfully')

        } catch (error) {
            
            return response.status(400).json('Error when deleting message')

        }
    }



}
