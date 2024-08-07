import { IMessageRepository } from "../../../../modules/messages/repositories/IMessageRepositories";
import { UploadDataDTO } from "../../../../modules/messages/DTOs/querysparamsDTO";
declare class UploadMediaUseCase {
    private messageRepository;
    constructor(messageRepository: IMessageRepository);
    uploadMedia(data: UploadDataDTO): Promise<void>;
}
export { UploadMediaUseCase };
