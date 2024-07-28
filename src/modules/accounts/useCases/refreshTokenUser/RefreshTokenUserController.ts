import { Request, Response } from "express";
import {RefreshTokenUserUseCase} from './RefreshTokenUserUseCase'
import { container } from "tsyringe";

class RefreshTokenUserController{

    async handle(request:Request,response:Response){
        const {refresh_token} = request.body
        const refreshTokenUserUseCase = container.resolve(RefreshTokenUserUseCase)

        const token = await refreshTokenUserUseCase.execute(refresh_token)
        
        return response.status(200).json(token)
    }
}

export{RefreshTokenUserController}