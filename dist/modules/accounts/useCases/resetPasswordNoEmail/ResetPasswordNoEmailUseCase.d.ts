import "reflect-metadata";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
declare class ResetPasswordNoEmailUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    resetPassword(id: string, password: string): Promise<string>;
}
export { ResetPasswordNoEmailUseCase };
