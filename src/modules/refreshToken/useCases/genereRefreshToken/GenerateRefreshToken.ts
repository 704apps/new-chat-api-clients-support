
import { RefreshToken } from "../../infra/typeorm/Entities/RefreshToken"
import {injectable, inject } from "tsyringe"
import { IRefreshTokenRepostory } from "../../repositories/IRefreshTokenRepositoies"
import { AppError } from "../../../../error/AppError"

@injectable()
class GenerateRefreshToken{
    
    constructor(
        @inject("RefreshTokenRepostory")
        private repositoryRefreshToken: IRefreshTokenRepostory

    ) { }

    async execute(userId: string):Promise<RefreshToken|null>{
        try {
            const generateRefreshToken = await this.repositoryRefreshToken.create(userId)

            return generateRefreshToken
        } catch (error) {
           // console.log('============================')

           // console.log(error)
            throw new AppError("Error when generating reflesh token",400)
        }
     
    }
}

export {GenerateRefreshToken}