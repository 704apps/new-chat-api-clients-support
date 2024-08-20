import "reflect-metadata";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
import { Users } from "../../infra/typeorm/Entities/Users";
declare class GetAllUsersUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    getAllUser(): Promise<Users>;
}
export { GetAllUsersUseCase };
