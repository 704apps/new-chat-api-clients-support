import "reflect-metadata";
import { Request, Response } from "express";
declare class CreateUserController {
    handle(request: Request, response: Response): Promise<Response>;
}
export { CreateUserController };
