import { Request, Response } from 'express';
import { GetOldMessagesUseCase } from './GetOldMessagesUseCase';

import {container} from 'tsyringe'


class GetOldMessagesController {


    public async handle(request: Request, response: Response): Promise<Response> {
        try {

            const idMessage = request.params.id as unknown as number
          

            const getOldMessagesUseCase =   container.resolve(GetOldMessagesUseCase)
          
            const messages = await getOldMessagesUseCase.getOldMessages(idMessage);
        

            return   response.status(200).json(messages)

            
        } catch (error) {

            return response.status(400).json({ error })

        }
    }
}

export {GetOldMessagesController}
