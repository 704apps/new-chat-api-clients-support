import "reflect-metadata";

import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../../../modules/accounts/DTOs/ICreateUserDTOS";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository"
import { hash } from 'bcrypt'
import { AppError } from "../../../../error/AppError";

@injectable()
class ResetPasswordNoEmailUseCase {

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) { }


    async resetPassword(id:string,password:string) {
        try {
            const passwordHash = await hash(password, 8)
            
            const passwordChange = await this.userRepository.resetPasswordNoEmail(id,passwordHash)

            if (!passwordChange) {
                throw new AppError("User already exists")
            }
           
            return passwordChange

        } catch (error) {
        //    console.log(error)
            throw new AppError('Error creating user',400,{error})
        }

    }

}

export { ResetPasswordNoEmailUseCase }