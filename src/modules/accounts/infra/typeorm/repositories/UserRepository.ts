import { ICreateUserDTO } from "../../../../../modules/accounts/DTOs/ICreateUserDTOS";
import { IUserRepository } from "../../../../../modules/accounts/repositories/IUsersRepository";
import { Repository } from "typeorm";
import {myDataSource} from "../../../../../main/infra/typeorm/connection/app-data-source"
import { Users } from "../Entities/Users";
import { AppError } from "../../../../../error/AppError";
import { injectable } from "tsyringe";

@injectable()
class UserRepository implements IUserRepository {

    private repository: Repository<Users>

    constructor() {
        this.repository = myDataSource.getRepository(Users)
    }
    
    async create({ name,  email, password }: ICreateUserDTO): Promise<Users> {

        const user = await this.repository.create({
            name, 
            email, 
            password
            
        })
        
       const userCreated =  await this.repository.save(user)
   

       return userCreated


    }
  

    async findByEmail(email: string): Promise<Users | null> {

        const user = await this.repository.findOneBy({email})
        
        return user
    }
    async findById(id: string): Promise<Users | null> {
        console.log('veio aqui')
        try{
        const user = await this.repository.findOneBy({id})
        
        return user   
        }catch(error){
            throw new AppError('dfdfdf')
        }
    }

    async allUsers(): Promise<Users[]> {
        console.log('veio aqui')
        try{
            const users = await this.repository.find();
            return users;
        }catch(error){
            throw new AppError('dfdfdf')
        }
    }

    async resetPasswordNoEmail(id: string,newPassword:string): Promise<string> {
        console.log('veio aqui')
        try{
            const user = await this.repository.findOneBy({id})
            if(!user){
                throw new AppError('User Not Found')
            }
            user.password = newPassword

            await this.repository.save(user)

            return 'Password change successfully';

        }catch(error){
            throw new AppError('',400,{error})
        }
    }

}

export { UserRepository }