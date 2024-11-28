
import { MessageDTO } from '../../../../modules/messages/DTOs/messageDTO';
import { SaveMessageUseCase } from "./SaveMessageUseCase"
import { container } from 'tsyringe';
import {  NextFunction } from 'express'

class SaveMessageController {
    private next:  NextFunction
    public async saveMessage(message: MessageDTO) {
        try {

            const saveMessageUseCase = container.resolve(SaveMessageUseCase)
            const newMessage = saveMessageUseCase.createMessage(message)
          

            return  newMessage

        } catch (error) {
          console.log('erro 2: ' + error)

            this.next(error)
           
            
        }
    }
}

export {SaveMessageController}
