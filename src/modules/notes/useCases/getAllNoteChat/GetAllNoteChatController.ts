import { Request, Response } from 'express';

import { GetAllNoteChatUseCase } from './GetAllNoteChatUseCase'
import { container } from 'tsyringe'


class GetAllNoteChatController {


    async handle(request: Request, response: Response): Promise<Response> {
        try {

            const chatID = request.params.id 
            

            const getAllNoteChatUseCase =  container.resolve(GetAllNoteChatUseCase)
            const notesChat =  await getAllNoteChatUseCase.getAllNotesSupportID(chatID)

            return response.status(200).json(notesChat)

        } catch (error) {
           // console.log(error)

            return response.status(400).json({ error });

        }
    }
}

export {GetAllNoteChatController}