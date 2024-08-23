import { ICreateUserDTO } from "../../../../../modules/accounts/DTOs/ICreateUserDTOS";
import { IUserRepository } from "../../../../../modules/accounts/repositories/IUsersRepository";
import { Repository } from "typeorm";
import { myDataSource } from "../../../../../main/infra/typeorm/connection/app-data-source"
import { Users } from "../Entities/Users";
import { AppError } from "../../../../../error/AppError";
import { injectable } from "tsyringe";
import { IUpdateUserDTOS } from "../../../DTOs/IUpdateUserDTOS";
import { IUploadDTOS } from "../../../DTOs/IUploadDTOS";
import { uploadToAws } from "../../../../../main/infra/upload/aws";

@injectable()
class UserRepository implements IUserRepository {

    private repository: Repository<Users>

    constructor() {
        this.repository = myDataSource.getRepository(Users)
    }

    async edit(data: IUpdateUserDTOS): Promise<Users> {

        const { id, email, name } = data

        const user = await this.repository.findOneBy({ id })
        console.log(email)
        user.name = name
        user.email = email
        if (data.avatar) {
            user.avatar = data.avatar
        }


        const updateUser = await this.repository.save(user)

        return updateUser

    }
    async updateUserToSubMaster(id: string, role: string): Promise<Users> {
        const user = await this.repository.findOneBy({ id })

        user.role = role;

        const updateuser = await this.repository.save(user)

        return updateuser

    }

    async create({ name, email, password, role }: ICreateUserDTO): Promise<Users> {

        const user = await this.repository.create({
            name,
            email,
            password,
            role,
            active: true

        })

        const userCreated = await this.repository.save(user)

        const returnCreatedUser = {
            id: userCreated.id,
            name: userCreated.name,
            supportId: userCreated.name,
            email: userCreated.email,
            avatar: userCreated.avatar,
            active: userCreated.active,
            role: userCreated.role,
            createdAt: userCreated.createdAt,
            updatedAt: userCreated.updatedAt,
        } as unknown as Users

        return returnCreatedUser


    }

    async findByEmail(email: string): Promise<Users | null> {

        const user = await this.repository.findOneBy({ email })

        return user
    }
    async findById(id: string): Promise<Users> {
        //  console.log('veio aqui')

        const user = await this.repository.findOneBy({ id })
       // console.log(user)
        return user


    }
    async uploadMedia(data: IUploadDTOS): Promise<String> {
        try {
            
            const { filename, filecontent,id} = data;

            const user = await  this.repository.findOneBy({id});

            if(!user){
                throw new AppError('User not found!');
            }
            const urlImage = await uploadToAws(filename, filecontent)

            user.avatar = urlImage
            
            await this.repository.save(user)

            return 'Avatar updated successfully!'

        } catch (error) {
            console.log('veio error')

            console.log(error)

            return
        }

    }
    async deleteUser(id: string): Promise<String> {
        //  console.log('veio aqui')

        const user = await this.repository.findOneBy({ id })

        if (!user) {
            throw new AppError('User Not Found')
        }
        await this.repository.delete(id)
        return 'User deleted successfully '

    }
    async getLoggedInUser(id: string): Promise<String> {
        //  console.log('veio aqui')

        const user = await this.repository.findOneBy({ id })

        if (!user) {
            throw new AppError('User Not Found')
        }
        await this.repository.delete(id)
        return 'User deleted successfully '

    }
    async disableUser(id: string, action: boolean): Promise<String> {
        //  console.log('veio aqui')

        const user = await this.repository.findOneBy({ id })

        if (!user) {
            throw new AppError('User Not Found')
        }
        user.active = action
        let seeAction = 'deactivated'
        if (action) {
            seeAction = 'reactivated'
        }
        await this.repository.save(user)
        return `User successfully ${seeAction}!`

    }
    async allUsers(): Promise<Users[]> {
        //   console.log('veio aqui')
        try {
            const users = await this.repository.find();
            return users;
        } catch (error) {
            throw new AppError('dfdfdf')
        }
    }

    async resetPasswordNoEmail(id: string, newPassword: string): Promise<string> {
        // console.log('veio aqui')
        try {
            const user = await this.repository.findOneBy({ id })
            if (!user) {
                throw new AppError('User Not Found')
            }
            user.password = newPassword

            await this.repository.save(user)

            return 'Password change successfully';

        } catch (error) {
            throw new AppError('', 400, { error })
        }
    }

}

export { UserRepository }