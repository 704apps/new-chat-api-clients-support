import {NextFunction,Request,Response} from 'express'

import {verify} from "jsonwebtoken"
import {AppError} from "@error/AppError"
import {UserRepository} from "@modules/accounts/infra/typeorm/repositories/UserRepository"

interface IPayload{
    sub:"string"
}

export async function ensureAuthenticated(request:Request,response:Response,next:NextFunction) {
    try{
        const authorization = request.headers.authorization

        if(!authorization){
            throw new AppError("Token missing",401) //Token Ausente
        }

        const [,token] = authorization.split(" ");
        const secretKey =String(process.env.SECRET_KEY)

        const {sub: user_id} = verify(token,secretKey) as IPayload

        const userRepository = new UserRepository();

        const user = await userRepository.findById(Number(user_id))
        if(!user){
            throw new AppError("User does not exists",401)
        }
        const id = Number(user_id)
        
        request.user = {id}

    }catch(error){
        throw new AppError("Invalid token", 401)
    }
}