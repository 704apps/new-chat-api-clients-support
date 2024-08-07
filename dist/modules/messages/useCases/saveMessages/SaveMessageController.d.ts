import { MessageDTO } from '../../../../modules/messages/DTOs/messageDTO';
declare class SaveMessageController {
    private next;
    saveMessage(message: MessageDTO): Promise<import("../../infra/typeorm/Entities/Messages").Messages>;
}
export { SaveMessageController };
