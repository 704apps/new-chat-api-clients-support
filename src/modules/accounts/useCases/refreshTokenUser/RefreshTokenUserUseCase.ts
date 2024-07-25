import { IRefreshTokenRepostory } from "@modules/refreshToken/repositories/IRefreshTokenRepositoies";
import {injectable, inject } from "tsyringe";

@injectable()
class RefreshTockenUserUseCase{
    constructor(
        @inject("RefreshTokenRepostory")
        private repositoryRefreshToken: IRefreshTokenRepostory

    ) { }
    async execute(refresh_token:string){

        const refreshToken = await this.repositoryRefreshToken.getOne(refresh_token)
        if()
    }
}