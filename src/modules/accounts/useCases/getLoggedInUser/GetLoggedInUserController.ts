import "reflect-metadata";

import { Request, Response } from "express"
import { container } from "tsyringe"
import { GetLoggedInUserUseCase } from "./GetLoggedInUserUseCase"

class GetLoggedInUserController {


    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const userId = response.locals.userId;

            if (!userId) {
                return response.status(400).json({ error: "Missing required fields" });
            }

            const getLoggedInUserUseCase = await container.resolve(GetLoggedInUserUseCase)

            const user =  await getLoggedInUserUseCase.getOneUserById(String(userId))
          //  console.log(user)
            return response.status(200).json({user})
            
        } catch (error) {
            
            return response.status(400).json({ error });
        }

    }

}

export { GetLoggedInUserController }