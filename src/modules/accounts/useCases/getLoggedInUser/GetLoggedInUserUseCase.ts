import "reflect-metadata";

import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository"
import { AppError } from "../../../../error/AppError";
import { alterNameForSupporId } from "../../../accounts/util/alterNameForSupporId";

@injectable()
class GetLoggedInUserUseCase {

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) { }


    async getOneUserById(userId: string) {
        try {

            const user = await this.userRepository.findById(userId)
            const userData = {
                id: user?.id,
                name: user?.name,
                email: user?.email,
                supportId:  alterNameForSupporId(user.name),                
                role: user.role,
                active: user.active,
                avatar: user.avatar,
                createdAt: user?.createdAt,
                updatedAt: user?.updatedAt,
            }

            return userData
        } catch (error) {
          
            throw new AppError('User not found', 400, { error })
        }

    }

}

export { GetLoggedInUserUseCase }