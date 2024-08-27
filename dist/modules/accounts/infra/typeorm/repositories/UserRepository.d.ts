import { ICreateUserDTO } from "../../../../../modules/accounts/DTOs/ICreateUserDTOS";
import { IUserRepository } from "../../../../../modules/accounts/repositories/IUsersRepository";
import { Users } from "../Entities/Users";
import { IUpdateUserDTOS } from "../../../DTOs/IUpdateUserDTOS";
import { IUploadDTOS } from "../../../DTOs/IUploadDTOS";
declare class UserRepository implements IUserRepository {
    private repository;
    constructor();
    edit(data: IUpdateUserDTOS): Promise<Users>;
    updateUserToSubMaster(id: string, role: string): Promise<Users>;
    create({ name, email, password, role }: ICreateUserDTO): Promise<Users>;
    findByEmail(email: string): Promise<Users | null>;
    findById(id: string): Promise<Users>;
    uploadMedia(data: IUploadDTOS): Promise<Users>;
    deleteUser(id: string): Promise<String>;
    getLoggedInUser(id: string): Promise<String>;
    disableUser(id: string, action: boolean): Promise<String>;
    allUsers(): Promise<Users[]>;
    resetPasswordNoEmail(id: string, newPassword: string): Promise<string>;
}
export { UserRepository };
