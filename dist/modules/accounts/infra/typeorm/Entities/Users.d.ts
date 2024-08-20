import "reflect-metadata";
import { RefreshToken } from '../../../../../modules/refreshToken/infra/typeorm/Entities/RefreshToken';
declare class Users {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    refreshTokens: RefreshToken[];
    createdAt: Date;
    updatedAt: Date;
}
export { Users };
