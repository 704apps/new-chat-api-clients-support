import "reflect-metadata";
import { ICreateUserDTO } from "../../../../modules/accounts/DTOs/ICreateUserDTOS";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
declare class CreateUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute({ name, email, password }: ICreateUserDTO): Promise<{
        id: string;
        name: string;
        email: string;
    }>;
}
export { CreateUserUseCase };