import { RefreshToken } from "../../infra/typeorm/Entities/RefreshToken";
import { IRefreshTokenRepostory } from "../../repositories/IRefreshTokenRepositoies";
declare class GenerateRefreshToken {
    private repositoryRefreshToken;
    constructor(repositoryRefreshToken: IRefreshTokenRepostory);
    execute(userId: string): Promise<RefreshToken | null>;
}
export { GenerateRefreshToken };
