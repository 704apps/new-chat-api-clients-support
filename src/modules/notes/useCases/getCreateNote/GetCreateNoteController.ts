import { Request, Response } from 'express';

import { GetCreateNoteUseCase } from './GetCreateNoteUseCase'
import { container } from 'tsyringe'
import { NoteDTO } from '../../DTOs/NoteDTO';


class GetCreateNoteController
 {

    async handle(request: Request, response: Response): Promise<Response> {
        try {

            const dataForNoteCreation: NoteDTO = request.body
            
            const getCreateNoteUseCase =  container.resolve(GetCreateNoteUseCase)
            const note = await getCreateNoteUseCase.getCreateNote(dataForNoteCreation)

            return response.status(200).json(note)

        } catch (error) {
          //  console.log(error)
            return response.status(400).json({ error });

        }
    }
}

export { GetCreateNoteController}