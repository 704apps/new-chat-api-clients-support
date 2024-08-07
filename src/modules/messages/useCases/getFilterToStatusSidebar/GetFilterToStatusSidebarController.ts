import { Request, Response } from 'express';
import { GetFilterToStatusSidebarUseCase } from './GetFilterToStatusSidebarUseCase';

import {container} from 'tsyringe'
import { AppError } from '../../../../error/AppError';


class GetFilterToStatusSidebarController {


    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { projectId } = request.query

            if(!projectId){
                throw new AppError('Project name is required')
            }

            const getFilterToStatusSidebarUseCase =   container.resolve(GetFilterToStatusSidebarUseCase)

            const messages = await getFilterToStatusSidebarUseCase.getFilterToStatusSidebar(String(projectId));

            return response.status(200).json(messages)

        } catch (error) {
            return response.status(400).json({error })

        }
    }
}

export {GetFilterToStatusSidebarController}
