import { Request, Response } from 'express';
declare class UploadMediaController {
    handle(request: Request, response: Response): Promise<Response>;
}
export { UploadMediaController };
