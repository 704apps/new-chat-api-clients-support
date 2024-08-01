import { ICreateUserDTO } from "@modules/accounts/DTOs/ICreateUserDTOS"
import { Users } from "../../../modules/accounts/infra/typeorm/Entities/Users"

interface IUserRepository{
    create(data: ICreateUserDTO):Promise<Users>
    findByEmail(email:string):Promise<Users | null>
    findById(id:string):Promise<Users | null>
    
}

export {IUserRepository}