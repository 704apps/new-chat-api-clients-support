
import { MessageDTO } from '@modules/messages/DTOs/messageDTO';
import { SaveMessageUseCase } from "./SaveMessageUseCase"
import { container } from 'tsyringe';
import { response, NextFunction } from 'express'

export class SaveMessageController {
    private next:  NextFunction
    public async saveMessage(message: MessageDTO) {
        try {


            const saveMessageUseCase = container.resolve(SaveMessageUseCase)
            const newMessage = saveMessageUseCase.createMessage(message)
          

            return  newMessage

        } catch (error) {
          

            this.next(error)
           
            
        }
    }
}
