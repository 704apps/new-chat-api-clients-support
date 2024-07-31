import { Request, Response } from 'express';
import { UpdateBySAUseCase } from './UpdateBySAUseCase'
import { container } from 'tsyringe'



export class UpdateMessageController {


    async handle(request: Request, response: Response): Promise<Response> {
        try {


            const id: number = request.params.id as unknown as number
            const uppdateBySAUseCase = await container.resolve(UpdateBySAUseCase)
            const messageUpdade = await uppdateBySAUseCase.upldateSA(id)

            return response.status(200).json( messageUpdade)

        } catch (error) {

            return response.status(400).json({ error })

        }
    }
}
