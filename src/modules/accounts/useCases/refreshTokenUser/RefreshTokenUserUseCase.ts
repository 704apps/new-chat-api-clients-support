import { AppError } from "../../../../error/AppError";
import { GenerateTokenProvider } from "../../../../modules/accounts/provider/GenerateToeknProvider";
import { IRefreshTokenRepostory } from "../../../../modules/refreshToken/repositories/IRefreshTokenRepositoies";
import { GenerateRefreshToken } from "../../../../modules/refreshToken/useCases/genereRefreshToken/GenerateRefreshToken";
import dayjs from "dayjs";
import { injectable, inject, container } from "tsyringe";

@injectable()
class RefreshTokenUserUseCase {
    constructor(
        @inject("RefreshTokenRepostory")
        private repositoryRefreshToken: IRefreshTokenRepostory

    ) { }
    async execute(refresh_token: string) {
        const refreshToken = await this.repositoryRefreshToken.getOne(refresh_token)
        if (!refreshToken) {
            throw new AppError('Refresh token invalid');
        }

        const refreshTokenExpired = dayjs().isAfter(dayjs.unix(refreshToken.expiriesIn))


        const generateRefleshToken = new GenerateTokenProvider()
        const token = await generateRefleshToken.execute(String(refreshToken.userId.id))

        if (refreshTokenExpired) {
            const generateRefleshTokenProvider = container.resolve(GenerateRefreshToken)
            const nRefreshToken = await generateRefleshTokenProvider.execute(String(refreshToken.userId.id))
            const newRefreshToken = {
                id: nRefreshToken?.id
            }
            const user = {
                expiriesIn: nRefreshToken?.expiriesIn,
                userid: nRefreshToken?.userId.id,
                userName: refreshToken?.userId.name,
                supportId: refreshToken?.userId.name,
                email: refreshToken?.userId.email,
                avatar: refreshToken?.userId.avatar,

                createdAt: refreshToken?.userId.createdAt,
                updatedAt: refreshToken?.userId.updatedAt
            }
            return { token, newRefreshToken, user }
        }
        const user = {
            userid: refreshToken?.userId.id,
            userName: refreshToken?.userId.name,
            supportId: refreshToken?.userId.name,
            email: refreshToken?.userId.email,
            avatar: refreshToken?.userId.avatar,
            createdAt: refreshToken?.userId.createdAt,
            updatedAt: refreshToken?.userId.updatedAt
        }
        return { token, user }

    }
}

export { RefreshTokenUserUseCase }