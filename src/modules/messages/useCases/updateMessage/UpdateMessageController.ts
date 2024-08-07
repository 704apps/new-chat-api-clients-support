import wz, { Request, Response } from 'express';
import { UpdateMessageUseCase } from './UpdateMessageUseCase'
import { container } from 'tsyringe'



class UpdateMessageController {


    async handle(request: Request, response: Response): Promise<Response> {
        try {


            const id: number = request.params.id as unknown as number
            const { messages } = request.body;
       
            const updateMessageUseCase = await container.resolve(UpdateMessageUseCase)
            const messageUpdade = await updateMessageUseCase.updateMessage(id, messages)

            return response.status(200).json( messageUpdade )

        } catch (error) {

            return response.status(400).json({ error })

        }
    }
}
export {UpdateMessageController}