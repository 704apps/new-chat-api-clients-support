import "reflect-metadata";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
import { IUpdateUserDTOS } from "../../DTOs/IUpdateUserDTOS";
declare class EditUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute(data: IUpdateUserDTOS): Promise<{
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
export { EditUserUseCase };