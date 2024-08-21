import "reflect-metadata";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
declare class UpdateUserToSubMasterUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    updateUserToSubMaster(id: string, role: string): Promise<{
        id: string;
        name: string;
        role: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export { UpdateUserToSubMasterUseCase };
