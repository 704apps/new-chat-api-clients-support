import "reflect-metadata"
import { injectable, inject } from "tsyringe";
import { IUserRepository } from "@modules/accounts/repositories/IUsersRepository";
import { sign } from "jsonwebtoken"
import { compare } from "bcrypt"
import { AppError } from "@error/AppError";
import { GenerateRefreshToken } from '@modules/refreshToken/useCases/genereRefreshToken/GenerateRefreshToken'
import { container } from 'tsyringe'
import { DeleteRefreshToken } from '@modules/refreshToken/useCases/deteteRefreshToken/DeleteRefreshToken'

import { RefreshToken } from "@modules/refreshToken/infra/typeorm/Entities/RefreshToken";
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
        const user = await this.userRespository.findByEmail(email)

        if (!user) {
            throw new AppError("Email or password incorrect!",)
        }


        const passwordMath = await compare(password, user.password)

        if (!passwordMath) {
            throw new AppError("Email or password incorrect!")
        }
        ;
        const secretKey = String(process.env.SECRET_key)

        const token = sign({

        }, secretKey, {
            subject: `${user.id}`, // Define o subject (assunto) do token
            expiresIn: '1h' // Define o tempo de expiração do token para 1 hora

        })
         
        const generateRefleshToken = container.resolve(GenerateRefreshToken)
        const deleteRefleshToken = container.resolve(DeleteRefreshToken)

        await  deleteRefleshToken.deleteMany(user.id)

        const returrefreshToken: RefreshToken = await generateRefleshToken.execute(user.id) as unknown as RefreshToken

        const refreshToken = {
          
                id: returrefreshToken.id,
                expiriesIn: returrefreshToken.expiriesIn,
                userid: returrefreshToken.userId.id,
                userName: returrefreshToken.userId.name
            
        }
        return {token, refreshToken }
    }
}

export { AutenticateUserUseCase }