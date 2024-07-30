
import { MessageDTO } from '@modules/messages/DTOs/messageDTO';
import { SaveMessageUseCase } from "./SaveMessageUseCase"
import { container } from 'tsyringe';
import { response } from 'express'

export class MessageService {

    public async saveMessage(message: MessageDTO) {
        try {


            const saveMessageUseCase = container.resolve(SaveMessageUseCase)
            const newMessage = saveMessageUseCase.createMessage(message)

            return newMessage

        } catch (error) {

            return response.status(400).json({error})
            
        }
    }
}
