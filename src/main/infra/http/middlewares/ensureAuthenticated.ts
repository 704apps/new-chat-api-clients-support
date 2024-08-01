import { NextFunction, Request, Response } from 'express'

import { verify } from "jsonwebtoken"
import { AppError } from "@error/AppError"
import { UserRepository } from "@modules/accounts/infra/typeorm/repositories/UserRepository"

interface IPayload {
    sub: "string"
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    try {
        const authHerder = request.headers.authorization;
        console.log('veio pelo menos aqui')
        if (!authHerder) {
            throw new AppError("Token missing", 401)
        }
        console.log('veio pelo menos aqui2')

        const [, token] = authHerder.split(" ")




        const { sub: userId } = verify(token, "e434b149e2f3c418268e23d778777dfc") as IPayload
        const userRepository = new UserRepository()
        const user = await userRepository.findById(userId)
        if (!user) {
            throw new AppError("User does not exists!", 401)
        }

        //Aqui foi sobrescrito uma tipagem no @types

        next()

    } catch (error) {
    
        next(error);
        // throw new AppError("Invalid token", 401)
    }
}