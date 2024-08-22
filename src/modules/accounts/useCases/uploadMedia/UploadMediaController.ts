import { Request, Response } from 'express';
import { UploadMediaUseCase } from './UploadMediaUseCase'
import { container } from 'tsyringe'
import { IUploadDTOS } from '../../../accounts/DTOs/IUploadDTOS';



 class UploadMediaController {


    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const file = await request.file
            const idUser = request.params.id
            let dataBody: IUploadDTOS
            const uploadMediaUseCase = container.resolve(UploadMediaUseCase)
            
            if (file) {
                dataBody.id = idUser
                dataBody.filecontent = file.buffer
                dataBody.filename = file.originalname
                await uploadMediaUseCase.uploadMedia(dataBody)

            }

            return response.status(200).json({ message: 'Upload completed successfully!' })
            
        } catch (error) {
            console.log(error)
            return response.status(400).json({ error })

        }
    }



}
export {UploadMediaController}