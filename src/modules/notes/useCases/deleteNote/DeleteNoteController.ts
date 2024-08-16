import { Request, Response } from 'express';

import { DeleteNoteUseCase } from './DeleteNoteUseCase'
import { container } from 'tsyringe'


class DeleteNoteController {


    async handle(request: Request, response: Response): Promise<Response> {
        try {

            const idNote = request.params.id as unknown as number

            const deleteNoteUseCase = await container.resolve(DeleteNoteUseCase)
            const deleteNote = await deleteNoteUseCase.getNoteDelete(idNote)

            return response.status(200).json(deleteNote)

        } catch (error) {
            
            return response.status(400).json({ error });

        }
    }
}

export {DeleteNoteController}