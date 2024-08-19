import { Request, Response } from 'express';
import { UploadMediaUseCase } from './UploadMediaUseCase'
import { container } from 'tsyringe'
import { UploadDataDTO } from '../../../../modules/messages/DTOs/querysparamsDTO';



 class UploadMediaController {


    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const file = await request.file
            const dataBody: UploadDataDTO = await request.body
            const uploadMediaUseCase = container.resolve(UploadMediaUseCase)
            
            if (file) {
                dataBody.filecontent = file.buffer
                dataBody.filename = file.originalname
                await uploadMediaUseCase.uploadMedia(dataBody)

            }

            return response.status(200).json({ message: 'Upload completed successfully!' })
            
        } catch (error) {

            return response.status(400).json({ error })

        }
    }



}
export {UploadMediaController}