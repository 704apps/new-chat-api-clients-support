import { IUploadDTOS } from '../../../accounts/DTOs/IUploadDTOS';
import { IUserRepository } from "../../../accounts/repositories/IUsersRepository";
import { Users } from "../../../accounts/infra/typeorm/Entities/Users";
declare class UploadAvatarUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    uploadMedia(data: IUploadDTOS): Promise<Users>;
}
export { UploadAvatarUseCase };
