import { NextFunction, Request, Response } from 'express';
import { verify, JsonWebTokenError } from 'jsonwebtoken';
import { AppError } from '../../../../error/AppError';
import { UserRepository } from '../../../../modules/accounts/infra/typeorm/repositories/UserRepository';
import { container } from 'tsyringe';
import { GetOneMessagesClientUseCase } from '../../../../modules/messages/useCases/getOneMessage/GetOneMessagesUseCase';

interface IPayload {
    sub: string;
}
async function compareToken(pc,tk){
    if(pc!==tk){
        return false
    }
    return true
}
export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    try {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new AppError('Token missing', 401);
        }

        const [, token] = authHeader.split(' ');

        // Verifica o token JWT
        const { sub: userId } = verify(token, process.env.SECRET_JWT) as IPayload;

        const userRepository = new UserRepository();
        const user = await userRepository.findById(userId);

        if (!user) {
            throw new AppError('User does not exist!', 401);
        }

        return next();
    } catch (error) {
        if (error instanceof JsonWebTokenError) {
            try {
                const authHeader = request.headers.authorization;

                if (!authHeader) {
                    //console.log('veio aqui antes0')
                    throw new AppError('Token missing', 401);
                }

                const [, token] = authHeader.split(' ');
                const id = request.params.id;
               
               // console.log('veio aqui antes')
                if (!id) {
                  //  console.log('veio aqui2222')
                    const { projectId } = request.body; // Obtendo projectId do body
                   // console.log(projectId)
                    try {
                        const tokenMatches = await compareToken(projectId, token);
                        console.log
                        if (!tokenMatches) {
                     //       console.log('veio aqui3:' + projectId)

                            throw new AppError('Invalid or expired token', 401);
                        }
                        return next();
                    } catch (error) {

                        throw new AppError('Invalid or expired token', 401,{error});
                    }
                }

                const getNewMessagesClientUseCase = container.resolve(GetOneMessagesClientUseCase);
                const messages = await getNewMessagesClientUseCase.getOneMessage(Number(id));

                const { projectId } = messages


                // Comparação com bcrypt
                const tokenMatches = await compareToken(projectId, token);

                if (!tokenMatches) {

                    throw new AppError('Invalid or expired token', 401);
                }

                return next();
            } catch (error) {
                try {
                    const authHeader = request.headers.authorization;

                    if (!authHeader) {
                        //console.log('veio aqui antes0')
                        throw new AppError('Token missing', 401);
                    }
    
                    const [, token] = authHeader.split(' ');
                    const id = request.params.id;
                    const tokenMatches = await compareToken(id, token);
                    if (!tokenMatches) {
                        
                        throw new AppError('Invalid or expired token', 401);
                    }
                    return next();
                  
                } catch (error) {

                    throw new AppError('Invalid or expired token', 401,{error});
                };
            }
        } else {
            return next(error);
        }
    }
}
