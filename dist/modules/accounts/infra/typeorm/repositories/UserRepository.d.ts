import { ICreateUserDTO } from "../../../../../modules/accounts/DTOs/ICreateUserDTOS";
import { IUserRepository } from "../../../../../modules/accounts/repositories/IUsersRepository";
import { Users } from "../Entities/Users";
declare class UserRepository implements IUserRepository {
    private repository;
    constructor();
    create({ name, email, password }: ICreateUserDTO): Promise<Users>;
    findByEmail(email: string): Promise<Users | null>;
    findById(id: string): Promise<Users | null>;
}
export { UserRepository };
