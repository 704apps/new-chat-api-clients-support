import "reflect-metadata";

import { Request, Response } from "express"
import { container } from "tsyringe"
import { GetOneUserUseCase } from "./GetOneUserUseCase"

class GetOneUserController {


    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const userId= request.params.id
            if (!userId) {
                return response.status(400).json({ error: "Missing required fields" });
            }
            const GetOneUseCase = await container.resolve(GetOneUserUseCase)

            const user =  await GetOneUseCase.getOneUser(userId)
       
            return response.status(200).json({user})
            
        } catch (error) {
            
            return response.status(400).json({ error: 'Error ao criar usuário' });
        }

    }

}

export { GetOneUserController }