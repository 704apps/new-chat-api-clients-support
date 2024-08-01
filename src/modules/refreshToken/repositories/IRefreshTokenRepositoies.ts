import { RefreshToken } from "../infra/typeorm/Entities/RefreshToken";


export interface IRefreshTokenRepostory{
    
     create(userid:string):Promise<RefreshToken| null>;   
     getOne(refresh_token:string):Promise<RefreshToken>;   
     deleteMany(userId:string):Promise<void>;   

}