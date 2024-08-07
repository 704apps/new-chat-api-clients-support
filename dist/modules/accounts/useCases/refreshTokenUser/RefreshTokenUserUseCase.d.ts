import { IRefreshTokenRepostory } from "../../../../modules/refreshToken/repositories/IRefreshTokenRepositoies";
declare class RefreshTokenUserUseCase {
    private repositoryRefreshToken;
    constructor(repositoryRefreshToken: IRefreshTokenRepostory);
    execute(refresh_token: string): Promise<{
        token: string;
        newRefreshToken: {
            id: string;
        };
        user: {
            expiriesIn: number;
            userid: string;
            userName: string;
            supportId: string;
            email: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } | {
        token: string;
        newRefreshToken?: undefined;
        user?: undefined;
    }>;
}
export { RefreshTokenUserUseCase };
