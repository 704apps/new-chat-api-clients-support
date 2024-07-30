import { Request, Response } from 'express';

import { GetStatusAttentionUseCase } from './GetStatusAttentionUseCase'
import { container } from 'tsyringe'


class DeleteMessageController {


    async handle(request: Request, response: Response): Promise<Response> {
        try {

            const idChat = request.params.id as unknown as number
            const {supportId} = request.query


            const getStatusAttentionUseCase = await container.resolve(GetStatusAttentionUseCase)
            await getStatusAttentionUseCase.getStatusAttention(idChat,String(supportId))

            return response.status(200).json({chat:getStatusAttentionUseCase})

        } catch (error) {
            
            return response.status(400).json({ error });

        }
    }
}

export {DeleteMessageController}