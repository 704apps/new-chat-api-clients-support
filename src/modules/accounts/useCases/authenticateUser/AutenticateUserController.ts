import { Request, Response } from "express";
import { container } from "tsyringe";
import { AutenticateUserUseCase } from "./AutenticateUserUseCase";


class AuthenticateUserController {

    async handle(request: Request, response: Response): Promise<Response> {
    
        try {
                   
            const { email, password } = request.body;

            const authenticateUseCase = container.resolve(AutenticateUserUseCase);

            const { token, refreshToken,user  } = await authenticateUseCase.execute({ password, email });

            return response.status(200).json({ token, refreshToken ,user });

        } catch (error) {
            console.log(error)
            return response.status(401).json({error});

        }
    }


}


export { AuthenticateUserController }