import "reflect-metadata";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
import { IUpdateUserDTOS } from "../../DTOs/IUpdateUserDTOS";
declare class EditUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute(data: IUpdateUserDTOS): Promise<{
        id: string;
        name: string;
        email: string;
        role: string;
        active: boolean;
    }>;
}
export { EditUserUseCase };
