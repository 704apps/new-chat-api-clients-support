import "reflect-metadata";

import { Request, Response } from 'express';
import { GetSearchByWordOrPhraseUseCase } from './GetSearchByWordOrPhraseUseCase';

import {container} from 'tsyringe'


class GetSearchByWordOrPhraseController {
    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const { word_phrase, supportId } = request.query 

            if( !word_phrase || !supportId){
                return response.status(400).json({ error: "Missing required fields" });
            }

            const getSearchProjectUseCase =   container.resolve(GetSearchByWordOrPhraseUseCase)

            const messages = await getSearchProjectUseCase.getSearchByWordOrPhrase( String(word_phrase), String(supportId));

            return response.status(200).json(messages)
            
        } catch (error) {
            
            return response.status(400).json({ error });
        }

    }

    // async handle(request: Request, response: Response): Promise<Response> {
    //     try {
    //         const { word_phrase, supportId } = request.query 

    //         if( !word_phrase || !supportId){
    //             return response.status(400).json({ error: "Missing required fields" });
    //         }

    //         const getSearchProjectUseCase =   container.resolve(GetSearchByWordOrPhraseUseCase)

    //         const messages = await getSearchProjectUseCase.getSearchByWordOrPhrase( String(word_phrase), String(supportId));

    //         return response.status(200).json(messages)

    //     } catch (error) {
    //         response.status(400).json({error })

    //     }
    // }
}

export {GetSearchByWordOrPhraseController}
