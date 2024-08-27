import { IRefreshTokenRepostory } from "../../../repositories/IRefreshTokenRepositoies";
import { RefreshToken } from "../Entities/RefreshToken";
declare class RefreshTokenRepostory implements IRefreshTokenRepostory {
    private repositoryRefleshToken;
    private repositoryUsers;
    constructor();
    getOne(refresh_token: string): Promise<RefreshToken>;
    create(userId: string): Promise<RefreshToken>;
    deleteMany(userId: string): Promise<void>;
}
export { RefreshTokenRepostory };
