import "reflect-metadata";

import { Request, Response } from "express"
import { container } from "tsyringe"
import { EditUserUseCase } from "./EditUserUseCase"
import { IUpdateUserDTOS } from "../../DTOs/IUpdateUserDTOS";

class EditUserController {


    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const id = request.params.id 
            const { name, email  } = request.body
            
            if (!name || !email || !id ) {
                return response.status(400).json({ error: "Missing required fields" });
            }
            
            const data: IUpdateUserDTOS = {
                id,
                email,
                name
            }
            const editUserUseCase = await container.resolve(EditUserUseCase)
            console.log(data)
            const user =  await editUserUseCase.execute(data)
      
            return response.status(200).json({message:'User update successfully',user})
            
        } catch (error) {
            
            return response.status(400).json({ error });
        }

    }

}

export { EditUserController }