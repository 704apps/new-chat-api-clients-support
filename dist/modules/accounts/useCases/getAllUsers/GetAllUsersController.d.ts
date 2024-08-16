import "reflect-metadata";
import { Request, Response } from "express";
declare class GetAllUsersController {
    handle(request: Request, response: Response): Promise<Response>;
}
export { GetAllUsersController };
