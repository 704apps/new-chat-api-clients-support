import "reflect-metadata";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
declare class GetOneUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    getOneUser(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export { GetOneUserUseCase };
