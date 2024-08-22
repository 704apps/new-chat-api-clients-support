import "reflect-metadata";

import { Request, Response } from "express"
import { container } from "tsyringe"
import { EditUserUseCase } from "./EditUserUseCase"
import { IUpdateUserDTOS } from "../../DTOs/IUpdateUserDTOS";
import { IUploadDTOS } from "../../DTOs/IUploadDTOS";

class EditUserController {


    async handle(request: Request, response: Response): Promise<Response> {

        try {
            console.log('11')
            const id = request.params.id 
            console.log('22')
            const { name, email  } = await request.body
           
            const file = await request.file
            console.log('33')

            if (!name || !email || !id ) {
                return response.status(400).json({ error: "Missing required fields" });
            }
           // let dataFile:IUploadDTOS
            console.log('33')
            //console.log(file)
           
            // if(file.originalname){
            //     console.log('44')

            //      dataFile.filename = String(file.originalname);
            //      dataFile.filecontent = file.buffer
            // }
            // console.log(dataFile.filename)
            // console.log('55')
            const data: IUpdateUserDTOS = {
                id,
                email,
                name,
               
            }
            const editUserUseCase = await container.resolve(EditUserUseCase)
            //console.log(data)
            const user =  await editUserUseCase.execute(data)
      
            return response.status(200).json({message:'User update successfully',user})
            
        } catch (error) {
            console.log(error)
            return response.status(400).json({ error });
        }

    }

}

export { EditUserController }