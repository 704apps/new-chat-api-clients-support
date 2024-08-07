import { IRefreshTokenRepostory } from "../../repositories/IRefreshTokenRepositoies";
declare class DeleteRefreshToken {
    private repositoryRefreshToken;
    constructor(repositoryRefreshToken: IRefreshTokenRepostory);
    deleteMany(userId: string): Promise<void>;
}
export { DeleteRefreshToken };
