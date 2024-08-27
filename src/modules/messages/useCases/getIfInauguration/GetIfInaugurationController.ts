import { Request, Response } from 'express';
import { GetIfInaugurationUseCase } from './GetIfInaugurationUseCase';

import {container} from 'tsyringe'


class GetIfInaugurationController {


    public async handle(request: Request, response: Response): Promise<Response> {
        try {

            const idMessage = request.params.id as unknown as number

            const getIfInaugurationUseCase =   container.resolve(GetIfInaugurationUseCase)

            const messages = await getIfInaugurationUseCase.getIfInauguration();

            return   response.status(200).json(messages)

        } catch (error) {

            return response.status(400).json({ error })

        }
    }
}

export {GetIfInaugurationController}
