import "reflect-metadata";
import { Request, Response } from "express";
declare class GetOneUserController {
    handle(request: Request, response: Response): Promise<Response>;
}
export { GetOneUserController };
