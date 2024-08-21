import "reflect-metadata";

import { Request, Response } from "express"
import { container } from "tsyringe"
import { DeleteUserUseCase } from "./DeleteUserUseCase"

class DeleteUserController {


    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const userId= request.params.id
            
            if (!userId ) {
                return response.status(400).json({ error: "Missing required fields" });
            }
            const deleteUserUseCase = await container.resolve(DeleteUserUseCase)

            const user =  await deleteUserUseCase.deleteUser(userId)
       
            return response.status(200).json(user)
            
        } catch (error) {
            
            return response.status(400).json( error );
        }

    }

}

export { DeleteUserController }