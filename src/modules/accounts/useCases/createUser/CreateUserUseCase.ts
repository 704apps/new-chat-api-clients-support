import "reflect-metadata";

import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "@modules/accounts/DTOs/ICreateUserDTOS";
import { IUserRepository } from "@modules/accounts/repositories/IUsersRepository"
import { hash } from 'bcrypt'
import { AppError } from "@error/AppError";
import { Users } from "@modules/accounts/infra/typeorm/Entities/Users";

@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) { }


    async execute({ name, email, password }: ICreateUserDTO) {
        try {
            console.log('a senha é '+password)
            const passwordHash = await hash(password, 8)
            console.log('veio no antes de ver email'+passwordHash)
            
            const isuseralreadyExist = await this.userRepository.findByEmail(email)

            console.log('veio no depois de ver email')

            if (isuseralreadyExist) {
                throw new AppError("User already exists")
            }

            console.log('veio no antes de salvar')

            const user = await this.userRepository.create({
                name,
                email,
                password: passwordHash,
            })
            const userCreated = {
                id: user.id,
                name: user.name,
                email: user.email
            }
          
            return userCreated
        } catch (error) {
            console.log(error)
            throw new AppError('Error creating user',400,{error})
        }

    }

}

export { CreateUserUseCase }