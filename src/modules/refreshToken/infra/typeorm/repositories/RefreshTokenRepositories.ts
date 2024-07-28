import { RelationId, Repository } from "typeorm";
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
        const refreshToken = await this.repositoryRefleshToken.createQueryBuilder('r')
            .leftJoinAndSelect('r.userId', 'users')
            .where('r.id=:refresh_token', { refresh_token })
            .getOne()

        console.log(refreshToken)
        if (!refreshToken) {
            throw new AppError('Missing token');
        }
        return refreshToken

    }
    async create(userId: string): Promise<RefreshToken> {

        const expiriesIn = dayjs().add(20, 'seconds').unix(); //unix cria um numererico
        console.log(userId)
        const userAlreadyExist = await this.repositoryUsers.findOneBy({ id: userId })

        if (!userAlreadyExist) {
            throw new AppError('User not found')
        }

        const generateRefleshToken = await this.repositoryRefleshToken.create({
            userId: userAlreadyExist,
            expiriesIn
        })
        const refreshToken = this.repositoryRefleshToken.save(generateRefleshToken)

        return refreshToken

    }
    async deleteMany(userId: string): Promise<void> {

        const userAlreadyExist = await this.repositoryUsers.findOneBy({ id: userId })

        if (!userAlreadyExist) {
            throw new AppError('User not found')
        }
        await this.repositoryRefleshToken.delete({ userId: userAlreadyExist });


    }


}

export { RefreshTokenRepostory }