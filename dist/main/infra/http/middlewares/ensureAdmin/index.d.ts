import { Request, Response, NextFunction } from 'express';
declare function ensureAdmin(request: Request, response: Response, next: NextFunction): Promise<void>;
declare function ensureAdminAndSubadmin(request: Request, response: Response, next: NextFunction): Promise<void>;
export { ensureAdmin, ensureAdminAndSubadmin };
