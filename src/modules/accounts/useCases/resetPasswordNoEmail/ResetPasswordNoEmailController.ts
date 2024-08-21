import "reflect-metadata";

import { Request, Response } from "express"
import { container } from "tsyringe"
import { ResetPasswordNoEmailUseCase } from "./ResetPasswordNoEmailUseCase"

class ResetPasswordNoEmailController {


    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const id = request.params.id
            const { password } = request.body
           // console.log(id)
         
            if (!password) {
                return response.status(400).json({ error: "Missing required fields" });
            }
            const resetPasswordNoEmailUseCase = await container.resolve(ResetPasswordNoEmailUseCase)

            const resChanged=  await resetPasswordNoEmailUseCase.resetPassword( id, password )
      
            return response.status(200).json(resChanged)
            
        } catch (error) {
          //  console.log(error)
            return response.status(400).json({ error });
        }

    }

}

export { ResetPasswordNoEmailController }