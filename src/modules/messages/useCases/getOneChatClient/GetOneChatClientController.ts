import { Request, Response } from 'express';
import { GetOneChatClientUseCase } from './GetOneChatClientUseCase';
import { container } from 'tsyringe';




class GetOneChatClientController{

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const chatId = request.params.id

            const getOneChatClientUseCase = container.resolve(GetOneChatClientUseCase)

            const message = await getOneChatClientUseCase.getOneMessagesClient(Number(chatId));

            return response.status(200).json({message})
            
        } catch (error) {
            
            return response.status(400).json({ error });
        }

    }


}

export {GetOneChatClientController}