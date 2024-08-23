import { IMessageRepository } from "../../../../modules/messages/repositories/IMessageRepositories";
import { AppError } from "../../../../error/AppError";
import { inject, injectable } from "tsyringe";
import { IUploadDTOS } from '../../../accounts/DTOs/IUploadDTOS';
import { IUserRepository } from "../../../accounts/repositories/IUsersRepository";

import { Users } from "../../../accounts/infra/typeorm/Entities/Users";


@injectable()  
class UploadAvatarUseCase {
    constructor(
      @inject("UserRepository")
      private userRepository: IUserRepository
      
    ) { }
    public async uploadMedia(data: IUploadDTOS): Promise<Users> {
        try {

            const userAvatarUpdate = await this.userRepository.uploadMedia(data);
           
            return userAvatarUpdate

        } catch (error) {

            throw new AppError('An error occurred while updating!', 400, { error })

        }
    }
}

export {UploadAvatarUseCase}