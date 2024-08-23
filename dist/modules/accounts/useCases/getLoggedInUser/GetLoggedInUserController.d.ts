import "reflect-metadata";
import { Request, Response } from "express";
declare class GetLoggedInUserController {
    handle(request: Request, response: Response): Promise<Response>;
}
export { GetLoggedInUserController };
