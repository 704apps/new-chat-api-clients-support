import { Request, Response } from 'express';
import { GetSearchProjectUseCase } from './GetSearchProjectUseCase';

import {container} from 'tsyringe'
import { AppError } from '@error/AppError';


class GetSearchProjectController {


    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { projectId } = request.query

            if(!projectId){
                throw new AppError('Project name is required')
            }

            const getSearchProjectUseCase =   container.resolve(GetSearchProjectUseCase)

            const messages = await getSearchProjectUseCase.getSearchProject(String(projectId));

            return response.status(200).json(messages)

        } catch (error) {
            return response.status(400).json({error })

        }
    }
}

export {GetSearchProjectController}
