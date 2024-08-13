import { Request, Response } from "express";
declare class RefreshTokenUserController {
    handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { RefreshTokenUserController };
