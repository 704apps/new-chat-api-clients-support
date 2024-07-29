
import { MessageDTO } from '@modules/messages/DTOs/messageDTO';
import {SaveMessageUseCase} from "./SaveMessageUseCase"
import { container } from 'tsyringe';


export class MessageService {

    public async saveMessage(message:MessageDTO) {

        const saveMessageUseCase = container.resolve(SaveMessageUseCase)
        const newMessage = saveMessageUseCase.createMessage(message)
   
        return newMessage
    }
}
