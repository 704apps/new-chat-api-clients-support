import "reflect-metadata";

import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "@modules/accounts/DTOs/ICreateUserDTOS";
import { IUserRepository } from "@modules/accounts/repositories/IUsersRepository"
import { hash } from 'bcrypt'
import { AppError } from "@error/AppError";
import { Users } from "@modules/accounts/infra/typeorm/Entities/Users";

@injectable()
class GetOneUserUseCase {

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) { }


    async getOneUser(id:string) {
        try {
            
            const user = await this.userRepository.findById(id)
          
            return user
        } catch (error) {
            console.log(error)
            throw new AppError('User not found',400,{error})
        }

    }

}

export { GetOneUserUseCase }