import "reflect-metadata"
import { injectable, inject } from "tsyringe";
import { IUserRepository } from "../../../../modules/accounts/repositories/IUsersRepository";
import { sign } from "jsonwebtoken"
import { compare } from "bcrypt"

import { AppError } from "../../../../error/AppError";
import { GenerateRefreshToken } from '../../../../modules/refreshToken/useCases/genereRefreshToken/GenerateRefreshToken'
import { container } from 'tsyringe'
import { DeleteRefreshToken } from '../../../../modules/refreshToken/useCases/deteteRefreshToken/DeleteRefreshToken'

import { RefreshToken } from "../../../../modules/refreshToken/infra/typeorm/Entities/RefreshToken";
interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    token: string;
    refreshToken: {
        id: string,
        expiriesIn: string,
        userid: string
    }


}
@injectable()
class AutenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRespository: IUserRepository
    ) { }

    async execute({ email, password }: IRequest) {
        const userVerify = await this.userRespository.findByEmail(email)

        if (!userVerify) {
            throw new AppError("Email or password incorrect!",)
        }

        if (!userVerify.active) {
            throw new AppError('This User has been deactivated!', 400);
        }
        //     console.log('veio aqui 1')

        const passwordMath = await compare(password, userVerify.password)

        if (!passwordMath) {
            //  console.log('veio aqui 2')
            throw new AppError("Email or password incorrect!")
        }
        ;
        const secretKey = String(process.env.SECRET_JWT)

        const token = sign({

        }, secretKey, {
            subject: `${userVerify.id}`, // Define o subject (assunto) do token
            expiresIn: '24h' // Define o tempo de expiração do token para 1 hora

        })

        
        const generateRefleshToken = container.resolve(GenerateRefreshToken)
        const deleteRefleshToken = container.resolve(DeleteRefreshToken)

        await deleteRefleshToken.deleteMany(userVerify.id)

        const returrefreshToken: RefreshToken = await generateRefleshToken.execute(userVerify.id) as unknown as RefreshToken

        const refreshToken = {

            id: returrefreshToken?.id,
            expiriesIn: returrefreshToken?.expiriesIn,

        }
        const user = {
            id: returrefreshToken?.userId.id,
            name: returrefreshToken?.userId.name,
            supportId: returrefreshToken?.userId.name,
            email: returrefreshToken?.userId.email,
            role: returrefreshToken?.userId.role,
            active: returrefreshToken?.userId.active,
            createdAt: returrefreshToken?.userId.createdAt,
            updatedAt: returrefreshToken?.userId.updatedAt
        }
        return { token, refreshToken, user }
    }
}

export { AutenticateUserUseCase }