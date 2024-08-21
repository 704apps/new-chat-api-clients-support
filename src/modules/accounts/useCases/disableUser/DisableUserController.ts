import "reflect-metadata";

import { Request, Response } from "express"
import { container } from "tsyringe"
import { DisableUserUseCase } from "./DisableUserUseCase"

class DisableUserController {


    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const userId= request.params.id
            const {action} = request.body
            if (!userId ) {
                return response.status(400).json({ error: "Missing required fields" });
            }
            const disableUserUseCase = await container.resolve(DisableUserUseCase)

            const user =  await disableUserUseCase.disableUser(userId,action)
       
            return response.status(200).json(user)
            
        } catch (error) {
            
            return response.status(400).json( error );
        }

    }

}

export { DisableUserController }