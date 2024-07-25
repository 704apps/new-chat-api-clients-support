import "reflect-metadata"
import { injectable ,inject} from "tsyringe";
import { IUserRespository } from "@modules/accounts/repositories/IUsersRespository";
import {sign} from "jsonwebtoken"
import {compare} from "bcrypt"
import { AppError } from "@error/AppError";
import { GenerateRefreshToken} from '@modules/refreshToken/useCases/GenerateRefreshToken'
import {container} from 'tsyringe'
interface IRequest{
    email: string;
    password: string;
}

interface IResponse{
    user:{
        name: string,
        email: string

    },
    token: string;

}
@injectable()
class AutenticateUserUseCase{
    constructor(
        @inject("UserRepository")
        private userRespository: IUserRespository
    ){}

    async execute({email,password}:IRequest):Promise<IResponse>{
        const user = await this.userRespository.findByEmail(email)

        if(!user){
            throw new AppError("Email or password incorrect!",)
        }


        const passwordMath = await compare(password, user.password)

        if(!passwordMath){
            throw new AppError("Email or password incorrect!")
        }
        ;
        const secretKey = String(process.env.SECRET_key)
        
        const token = sign({
           
        },secretKey,{
            subject: `${user.id}`, // Define o subject (assunto) do token
            expiresIn: '20s'  // Define a expiração do token para 1 hora
           
        })

        const   generateRefleshToken = container.resolve(GenerateRefreshToken)

        const tokenReturn: IResponse ={
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }
        return tokenReturn
    }
}

export {AutenticateUserUseCase}