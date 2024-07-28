import "reflect-metadata";

import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateUserUseCase } from "./CreateUserUseCase"

class CreateUserController {


    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const { name, email, password } = request.body
            if (!name || !email || !password) {
                return response.status(400).json({ error: "Missing required fields" });
            }
            const createUseCase = await container.resolve(CreateUserUseCase)

            const user =  await createUseCase.execute({ name, email, password })
            console.log('dfdfdf')
            console.log(user)
            return response.status(201).json({message:'User created successfully',user})
            
        } catch (error) {
            
            return response.status(400).json({ error: 'Error ao criar usuário' });
        }

    }

}

export { CreateUserController }