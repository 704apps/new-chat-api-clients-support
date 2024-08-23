import { Request, Response } from 'express';
import { UploadAvatarUseCase } from './UploadAvatarUseCase'
import { container } from 'tsyringe'
import { IUploadDTOS } from '../../../accounts/DTOs/IUploadDTOS';



class UploadAvatarController {


    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const file = await request.file
            const idUser = request.params.id
            let dataBody: IUploadDTOS = {} as IUploadDTOS;
            const uploadAvatarUseCase = container.resolve(UploadAvatarUseCase)
           
            if (!file) {
                return response.status(400).json({ error: "File not provided!" });
            }
            dataBody.id = idUser
            dataBody.filecontent = file.buffer
            dataBody.filename = file.originalname

            const user = await uploadAvatarUseCase.uploadMedia(dataBody)

            return response.status(200).json(user)

        } catch (error) {
            console.log(error)
            return response.status(400).json({ error })

        }
    }



}
export { UploadAvatarController }