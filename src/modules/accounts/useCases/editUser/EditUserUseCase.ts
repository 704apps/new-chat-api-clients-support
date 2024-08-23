import "reflect-metadata";

import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository"
import { AppError } from "../../../../error/AppError";
import { IUpdateUserDTOS } from "../../DTOs/IUpdateUserDTOS";
import { IUploadDTOS } from "../../DTOs/IUploadDTOS";
import { uploadToAws } from "../../../../main/infra/upload/aws";
import { alterNameForSupporId } from "../../../../modules/accounts/util/alterNameForSupporId";

@injectable()
class EditUserUseCase {

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) { }


    async execute(data: IUpdateUserDTOS) {
        try {

            const { id } = data
            // filename:string;
            // filecontent:Buffer;
            // console.log('veio no antes de ver email'+passwordHash)

            const isuseralreadyExist = await this.userRepository.findById(id)

            //  console.log('veio no depois de ver email')

            if (!isuseralreadyExist) {
                console.log('veio aqui')
                throw new AppError("User already exists")
            }
          
            const user = await this.userRepository.edit(data)

            const userUpdate = {
                id: user.id,
                name: user.name,
                supportId: await alterNameForSupporId(user.name),
                email: user.email,
                avatar: user.avatar,
                active: user.active,
                role: user.role,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            }


            return userUpdate

        } catch (error) {
            console.log(error)
            throw new AppError('Error creating user', 400, { error })
        }

    }

}

export { EditUserUseCase }