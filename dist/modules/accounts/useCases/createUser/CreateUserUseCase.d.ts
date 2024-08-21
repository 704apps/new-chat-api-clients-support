import "reflect-metadata";
import { ICreateUserDTO } from "../../../../modules/accounts/DTOs/ICreateUserDTOS";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
declare class CreateUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute({ name, email, password, role }: ICreateUserDTO): Promise<{
        id: string;
        name: string;
        email: string;
        role: string;
    }>;
}
export { CreateUserUseCase };
