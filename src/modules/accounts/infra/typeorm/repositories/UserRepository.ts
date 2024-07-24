import { ICreateUserDTO } from "@modules/accounts/DTOs/ICreateUserDTOS";
import { IUserRespository } from "@modules/accounts/repositories/IUsersRespository";
import { Repository } from "typeorm";
import {myDataSource} from "@main/infra/typeorm/connection/app-data-source"
import { Users } from "../Entities/Users";
import { AppError } from "@error/AppError";


class UserRepository implements IUserRespository {

    private repository: Repository<Users>

    constructor() {
        this.repository = myDataSource.getRepository(Users)
    }
    
    async create({ name, avatar, email, password, driver_license }: ICreateUserDTO): Promise<void> {
        const user = await this.repository.create({
            name, 
            email, 
            password
            
        })

        await this.repository.save(user)
    }
  

    async findByEmail(email: string): Promise<Users> {
        const user = await this.repository.findOneBy({email})
        if(!user){
            throw new AppError('User not found')
        }
        return user
    }
    async findById(id: number): Promise<Users> {
        const user = await this.repository.findOneBy({id})
        if(!user){
            throw new AppError('User not found')
        }
        return user   
    }
}

export { UserRepository }