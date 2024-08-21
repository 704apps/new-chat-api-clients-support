import "reflect-metadata";

import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateUserToSubMasterUseCase } from "./UpdateUserToSubMasterUseCase"

class UpdateUserToSubMasterController {


    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const userId= request.params.id
            const {role}= request.body
            if (!userId || !role) {
                return response.status(400).json({ error: "Missing required fields" });
            }
            const updateUserToSubMasterUseCase = await container.resolve(UpdateUserToSubMasterUseCase)

            const user =  await updateUserToSubMasterUseCase.updateUserToSubMaster(userId,role)
       
            return response.status(200).json(user)
            
        } catch (error) {
            
            return response.status(400).json( error );
        }

    }

}

export { UpdateUserToSubMasterController }