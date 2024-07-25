import { RefreshToken } from "../infra/typeorm/Entities/RefreshToken";


export interface IRefreshTokenRepostory{
    
     create(userid:string):Promise<RefreshToken>;   
     getOne(refresh_token:string):Promise<RefreshToken>;   

}