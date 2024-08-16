import "reflect-metadata";

import { Request, Response } from "express"
import { container } from "tsyringe"
import { GetAllUsersUseCase } from "./GetAllUsersUseCase"

class GetAllUsersController {


    async handle(request: Request, response: Response): Promise<Response> {

        try {
            
            const getAllUsersUseCase = await container.resolve(GetAllUsersUseCase)

            const users =  await getAllUsersUseCase.getAllUser()
       
            return response.status(200).json(users)
            
        } catch (error) {
            console.log(error)
            return response.status(400).json({ error });
        }

    }

}

export { GetAllUsersController }