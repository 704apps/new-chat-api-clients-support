import "reflect-metadata";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
declare class DeleteUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    deleteUser(id: string): Promise<String>;
}
export { DeleteUserUseCase };
