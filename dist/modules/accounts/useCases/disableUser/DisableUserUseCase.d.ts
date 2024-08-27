import "reflect-metadata";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
declare class DisableUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    disableUser(id: string, action: boolean): Promise<String>;
}
export { DisableUserUseCase };
