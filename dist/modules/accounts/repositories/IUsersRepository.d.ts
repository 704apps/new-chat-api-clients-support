import { ICreateUserDTO } from "../../../modules/accounts/DTOs/ICreateUserDTOS";
import { IUpdateUserDTOS } from "../../../modules/accounts/DTOs/IUpdateUserDTOS";
import { Users } from "../../../modules/accounts/infra/typeorm/Entities/Users";
import { IUploadDTOS } from "../DTOs/IUploadDTOS";
interface IUserRepository {
    create(data: ICreateUserDTO): Promise<Users>;
    edit(data: IUpdateUserDTOS): Promise<Users>;
    updateUserToSubMaster(id: string, role: string): Promise<Users>;
    deleteUser(id: string): Promise<String>;
    disableUser(id: string, action: boolean): Promise<String>;
    uploadMedia(data: IUploadDTOS): Promise<Users>;
    findByEmail(email: string): Promise<Users | null>;
    findById(id: string): Promise<Users | null>;
    allUsers(): Promise<Users[]>;
    resetPasswordNoEmail(id: string, newPassword: string): Promise<string>;
}
export { IUserRepository };
