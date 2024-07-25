import { Repository } from "typeorm";
import { IRefreshTokenRepostory } from "../../../repositories/IRefreshTokenRepositoies";
import { RefreshToken } from "../Entities/RefreshToken";
import { myDataSource } from "@main/infra/typeorm/connection/app-data-source";
import dayjs from "dayjs";
import { AppError } from "@error/AppError";
import { Users } from "@modules/accounts/infra/typeorm/Entities/Users";

class RefreshTokenRepostory implements IRefreshTokenRepostory {
    private repositoryRefleshToken: Repository<RefreshToken>
    private repositoryUsers: Repository<Users>

    constructor() {
        this.repositoryRefleshToken = myDataSource.getRepository(RefreshToken)
        this.repositoryUsers = myDataSource.getRepository(Users)

    }
    async getOne(refresh_token: string): Promise<RefreshToken> {
        const refreshToken = await this.repositoryRefleshToken.findOneBy({ id: refresh_token })
        if (!refreshToken) {
            throw new AppError('Missing token');
        }
        return refreshToken

    }
    async create(userId: string): Promise<RefreshToken> {

        const expiriesIn = dayjs().add(20, 'seconds').unix(); //unix cria um numererico

        const user = await this.repositoryRefleshToken.findOneBy({ id: userId })
        if (!user) {
            throw new AppError('Error when generating reflash token ')
        }

        const generateRefleshToken = await this.repositoryRefleshToken.create({
            userId: user,

            expiriesIn
        })

        return generateRefleshToken

    }



}

export { RefreshTokenRepostory }