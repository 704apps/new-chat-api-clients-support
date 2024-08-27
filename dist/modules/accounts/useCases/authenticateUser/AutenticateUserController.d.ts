import { Request, Response } from "express";
declare class AuthenticateUserController {
    handle(request: Request, response: Response): Promise<Response>;
}
export { AuthenticateUserController };
