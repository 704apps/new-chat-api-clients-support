import { Request, Response } from 'express';

import { GetOneNoteUseCase } from './GetOneNoteUseCase'
import { container } from 'tsyringe'


class GetOneNoteController {


    async handle(request: Request, response: Response): Promise<Response> {
        try {

            const idNote = request.params.id 
            

            const getOneNoteUseCase =  container.resolve(GetOneNoteUseCase)
            const note =  await getOneNoteUseCase.getOneNote(Number(idNote))

            return response.status(200).json(note)

        } catch (error) {
           // console.log(error)

            return response.status(400).json({ error });

        }
    }
}

export {GetOneNoteController}