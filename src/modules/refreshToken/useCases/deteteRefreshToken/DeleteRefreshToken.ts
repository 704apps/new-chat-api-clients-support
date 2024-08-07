
import {injectable, inject } from "tsyringe"
import { IRefreshTokenRepostory } from "../../repositories/IRefreshTokenRepositoies"
import { AppError } from "../../../../error/AppError"

@injectable()
class DeleteRefreshToken{
    
    constructor(
        @inject("RefreshTokenRepostory")
        private repositoryRefreshToken: IRefreshTokenRepostory

    ) { }

    async deleteMany(userId: string):Promise<void>{
        try {
            await this.repositoryRefreshToken.deleteMany(userId)
        } catch (error) {
          throw new AppError("Error when generating reflesh token",400)
        }
     
    }
}

export {DeleteRefreshToken}