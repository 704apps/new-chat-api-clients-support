import "reflect-metadata";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
interface IRequest {
    email: string;
    password: string;
}
declare class AutenticateUserUseCase {
    private userRespository;
    constructor(userRespository: IUserRepository);
    execute({ email, password }: IRequest): Promise<{
        token: string;
        refreshToken: {
            id: string;
            expiriesIn: number;
        };
        user: {
            userid: string;
            userName: string;
            supportId: string;
            email: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
}
export { AutenticateUserUseCase };
