import { ICreateUserDTO } from "@modules/accounts/DTOs/ICreateUserDTOS"
import { Users } from "@modules/accounts/infra/typeorm/Entities/Users"

interface IUserRespository{
    create(data: ICreateUserDTO):Promise<void>
    findByEmail(email:string):Promise<Users>
    findById(id:number):Promise<Users>
    
}

export {IUserRespository}