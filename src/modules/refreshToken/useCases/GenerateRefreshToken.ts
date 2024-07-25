import { Repository } from "typeorm"
import { RefreshToken } from "../infra/typeorm/Entities/RefreshToken"
import { myDataSource } from "@main/infra/typeorm/connection/app-data-source"
import {injectable, inject } from "tsyringe"
import { IRefreshTokenRepostory } from "../repositories/IRefreshTokenRepositoies"
import { AppError } from "@error/AppError"

@injectable()
class GenerateRefreshToken{
    
    constructor(
        @inject("RefreshTokenRepostory")
        private repositoryRefreshToken: IRefreshTokenRepostory

    ) { }

    async execute(userId: string):Promise<RefreshToken>{
        try {
            const generateRefreshToken = this.repositoryRefreshToken.create(userId)

            return generateRefreshToken
        } catch (error) {
            throw new AppError("Error when generating reflesh token",400,{error})
        }
     
    }
}

export {GenerateRefreshToken}