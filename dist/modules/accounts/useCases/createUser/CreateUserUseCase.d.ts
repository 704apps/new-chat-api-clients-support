import "reflect-metadata";
import { ICreateUserDTO } from "../../../../modules/accounts/DTOs/ICreateUserDTOS";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
declare class CreateUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute({ name, email, password, role }: ICreateUserDTO): Promise<{
        id: string;
        name: string;
        supportId: string;
        email: string;
        avatar: string;
        active: boolean;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export { CreateUserUseCase };
