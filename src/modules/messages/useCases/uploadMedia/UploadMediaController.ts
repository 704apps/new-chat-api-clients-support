import { Request, Response } from 'express';
import { UploadMediaUseCase } from './UploadMediaUseCase'
import { container } from 'tsyringe'
import { UploadDataDTO } from '@modules/messages/DTOs/querysparamsDTO';



export class UpdateMessageController {


    async handle(request: Request, response: Response): Promise<Response> {

        const file = await request.file
        const dataBody: UploadDataDTO = await request.body
        const uploadMediaUseCase = container.resolve(UploadMediaUseCase)
        if (file) {
            dataBody.filecontent = file.buffer
            dataBody.filename = file.originalname
            await uploadMediaUseCase.uploadMedia(dataBody)

        }
     

        return response.status(200).json({message:'Upload completed successfully!' })

    }



}
