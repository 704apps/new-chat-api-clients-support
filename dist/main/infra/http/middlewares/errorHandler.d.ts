import { NextFunction, Request, Response } from 'express';
declare function errorHandler(err: Error, request: Request, response: Response, next: NextFunction): Response<any, Record<string, any>>;
export { errorHandler };
