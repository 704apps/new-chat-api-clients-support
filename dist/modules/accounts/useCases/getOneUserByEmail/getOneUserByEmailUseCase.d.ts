import "reflect-metadata";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
declare class GetOneUserByEmailUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    getOneUserByEmail(email: string): Promise<{
        id: string;
        name: string;
        email: string;
        role: string;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export { GetOneUserByEmailUseCase };
