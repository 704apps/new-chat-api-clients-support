import { NextFunction, Request, Response } from 'express';
import { verify, JsonWebTokenError } from 'jsonwebtoken';
import { AppError } from '../../../../error/AppError';
import { UserRepository } from '../../../../modules/accounts/infra/typeorm/repositories/UserRepository';
import { container } from 'tsyringe';
import { GetOneMessagesClientUseCase } from '../../../../modules/messages/useCases/getOneMessage/GetOneMessagesUseCase';
import { compare } from 'bcrypt';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    try {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new AppError('Token missing', 401);
        }

        const [, token] = authHeader.split(' ');

        // Verifica o token JWT
        const { sub: userId } = verify(token, 'e434b149e2f3c418268e23d778777dfc') as IPayload;

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
                    throw new AppError('Token missing', 401);
                }

                const [, token] = authHeader.split(' ');
                const id = request.params.id;
                console.log('veio aqui antes')
                if (!id) {
                    console.log('veio aqui2222')
                    const {projectId} = request.body; // Obtendo projectId do body
                    console.log(projectId)

                    const tokenMatches = await compare(projectId, token);

                    if (!tokenMatches) {
                        console.log('veio aqui3:'+projectId)

                        throw new AppError('Invalid or expired token', 401);
                    }
                    return next();
 
                }

                const getNewMessagesClientUseCase = container.resolve(GetOneMessagesClientUseCase);
                const messages = await getNewMessagesClientUseCase.getOneMessage(Number(id));

                if (!messages || !messages.projectId) {



                    // Comparação com bcrypt
                    const tokenMatches = await compare(id, token);
                    if (!tokenMatches) {

                        throw new AppError('Invalid or expired token', 401);
                    }
                    return next();
                }

                const { projectId } = messages


                // Comparação com bcrypt
                const tokenMatches = await compare(projectId, token);

                if (!tokenMatches) {

                    throw new AppError('Invalid or expired token', 401);
                }

                return next();
            } catch (innerError) {
                return next(innerError);
            }
        } else {
            return next(error);
        }
    }
}
