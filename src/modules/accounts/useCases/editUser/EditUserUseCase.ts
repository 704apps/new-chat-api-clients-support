import "reflect-metadata";

import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../../../modules/accounts/DTOs/ICreateUserDTOS";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository"
import { hash } from 'bcrypt'
import { AppError } from "../../../../error/AppError";
import { IUpdateUserDTOS } from "../../DTOs/IUpdateUserDTOS";

@injectable()
class EditUserUseCase {

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) { }


    async execute(data: IUpdateUserDTOS) {
        try {
           
            const { id} = data
           
           // console.log('veio no antes de ver email'+passwordHash)
            
            const isuseralreadyExist = await this.userRepository.findById(id)

          //  console.log('veio no depois de ver email')

            if (!isuseralreadyExist) {
                console.log('veio aqui')
                throw new AppError("User already exists")
            }

           // console.log('veio no antes de salvar')

            const user = await this.userRepository.edit(data)   
            console.log(user)

            const userUpdate = {
                id: user.id,
                name: user.name,
                email: user.email,
                role : user.role
            }
            console.log(userUpdate)
            return userUpdate

        } catch (error) {
            console.log(error)
            throw new AppError('Error creating user',400,{error})
        }

    }

}

export { EditUserUseCase }