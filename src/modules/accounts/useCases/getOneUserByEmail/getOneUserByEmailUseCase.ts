import "reflect-metadata";

import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository"
import { AppError } from "../../../../error/AppError";
import { alterNameForSupporId } from "../../../accounts/util/alterNameForSupporId";

@injectable()
class GetOneUserByEmailUseCase {

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) { }


    async getOneUserByEmail(email: string) {
        try {

            const user = await this.userRepository.findByEmail(email)
            const userData = {
                id: user?.id,
                name: user?.name,
                email: user?.email,
                role: user.role,
                supportId: alterNameForSupporId(user.name),
                active: user.active,
                avatar: user?.avatar,
                createdAt: user?.createdAt,
                updatedAt: user?.updatedAt,
            }

            return userData
        } catch (error) {
            console.log(error)
            throw new AppError('User not found', 400, { error })
        }

    }

}

export { GetOneUserByEmailUseCase }