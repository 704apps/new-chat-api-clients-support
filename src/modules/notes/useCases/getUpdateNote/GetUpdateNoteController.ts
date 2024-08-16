import { Request, Response } from 'express';

import { GetUpdateNoteUseCase } from './GetUpdateNoteUseCase'
import { container } from 'tsyringe'


class GetUpdateNoteController {


    async handle(request: Request, response: Response): Promise<Response> {
        try {

            const idChat = request.params.id as unknown as number
            const {note} = request.body


            const getUpdateNoteUseCase =  container.resolve(GetUpdateNoteUseCase)
            const noteUpdate = await getUpdateNoteUseCase.getUpdateNote(idChat,String(note))

            return response.status(200).json(noteUpdate)

        } catch (error) {
            
            return response.status(400).json({ error });

        }
    }
}

export {GetUpdateNoteController}