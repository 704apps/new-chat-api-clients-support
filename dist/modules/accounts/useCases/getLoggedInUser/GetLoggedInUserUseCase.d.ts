import "reflect-metadata";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
declare class GetLoggedInUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    getOneUserById(userId: string): Promise<{
        id: string;
        name: string;
        email: string;
        supportId: string;
        role: string;
        active: boolean;
        avatar: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export { GetLoggedInUserUseCase };
