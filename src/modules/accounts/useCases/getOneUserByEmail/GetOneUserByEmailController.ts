import "reflect-metadata";

import { Request, Response } from "express"
import { container } from "tsyringe"
import { GetOneUserByEmailUseCase } from "./getOneUserByEmailUseCase"

class GetOneUserByEmailController {


    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const {email}= request.query

            if (!email) {
                return response.status(400).json({ error: "Missing required fields" });
            }

            const getOneUserByEmailUseCase = await container.resolve(GetOneUserByEmailUseCase)

            const user =  await getOneUserByEmailUseCase.getOneUserByEmail(String(email))
            console.log(user)
            return response.status(200).json({user})
            
        } catch (error) {
            
            return response.status(400).json({ error: 'Error ao criar usuário' });
        }

    }

}

export { GetOneUserByEmailController }