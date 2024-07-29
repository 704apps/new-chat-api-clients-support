import { Request, Response } from 'express';
import { UpdateMessageUseCase } from './UpdateMessageUseCase'
import { container } from 'tsyringe'



export class UpdateMessageController {


    async handle(request: Request, response: Response): Promise<Response> {

        const id: number = request.params.id as unknown as number
        const { message } = request.body;
        const updateMessageUseCase = await container.resolve(UpdateMessageUseCase)
        const messageUpdade = await updateMessageUseCase.updateMessage(id, message)

        return response.status(200).json({ messageUpdade })

    }



}
