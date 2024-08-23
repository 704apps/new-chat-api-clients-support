import { NextFunction, Request, Response } from 'express';
import { verify, JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
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
       //console.log('veio aqui no aute')
        const [, token] = authHeader.split(' ');
        try {
            const { sub: userId } = verify(token, process.env.SECRET_JWT) as IPayload;
            //console.log('veio aqui no aute4')
            const userRepository = new UserRepository();
            //console.log('veio aqui no aute5')

            const user = await userRepository.findById(userId);
            //console.log('veio aqui no aute6')

            if (!user) {
                throw new AppError('User does not exist!', 401);
            }
            if (user.active===false) {
                throw new AppError('This User has been deactivated!', 401);
            }
            //console.log('veio aqui no aute7')
            response.locals.userId = userId;
    
            return next();
        } catch (error) {
            if (error instanceof TokenExpiredError) {
                throw new AppError('Invalid token', 401);
              }
            
              // Outros erros podem ser tratados aqui
              throw new AppError('Invalid token.', 401);
        }
        
   
      

    } catch (error) {
        if (error instanceof JsonWebTokenError) {
            try {
                const authHeader = request.headers.authorization;

                if (!authHeader) {
               //     console.log('veio aqui antes0')
                    throw new AppError('Token missing', 401);
                }

                const [, token] = authHeader.split(' ');
                const id = request.params.id;
               
                //console.log('veio aqui antes')
                if (!id) {
                     //console.log('veio aqui2222')
                    const { projectId } = request.body; // Obtendo projectId do body
                   // console.log(projectId)
                    try {
                        const tokenMatches = await compareToken(projectId, token);
                        if (!tokenMatches) {
                    //        console.log('veio aqui3:' + projectId)

                            throw new AppError('Invalid or expired token', 401);
                        }
                        return next();
                    } catch (error) {
                 //       console.log('error')
                        return next(error);
                        //throw new AppError('Invalid or expired token', 401,{error});
                    }
                }
             //   console.log('veio aqui antes2')

                const getNewMessagesClientUseCase = container.resolve(GetOneMessagesClientUseCase);
                const messages = await getNewMessagesClientUseCase.getOneMessage(Number(id));
             //   console.log('veio aqui antes3')

                const { projectId } = messages
            //    console.log('veio aqui antes4')


                // Comparação com bcrypt
             //   console.log('veio aqui antes5.1')

                const tokenMatches = await compareToken(projectId, token);
             //   console.log('veio aqui antes5.2')

                if (!tokenMatches) {
          //          console.log('veio aqui antes6')

                    throw new AppError('Invalid or expired token', 401);
                }
           //     console.log('veio aqui antes7')

                return next();
            } catch (error) {
                try {
                    const authHeader = request.headers.authorization;
             //       console.log('veio aqui inicio')
                    if (!authHeader) {
                        console.log('veio aqui antes0')
                        throw new AppError('Token missing', 401);
                    }
              //      console.log('veio aqui depois')

                    const [, token] = authHeader.split(' ');
                    const id = request.params.id;
                    try {
                    //    console.log('veio aqui depois2')
                        const tokenMatches = await compareToken(id, token);
                        if (!tokenMatches) {
                    //        console.log('veio aqui depois3')
                            throw new AppError('Invalid or expired token', 401);
                        }
                    //    console.log('veio aqui depois4')

                    } catch (error) {
                  //      console.log('veio aqui depois5 no erro')

                        return next(error);
                    }
                    
                    
                    return next();
                  
                } catch (error) {
                    //console.log('veio aqui depois5 erro no try')
                    return next(error);
                    //throw new AppError('Invalid or expired token', 401,{error});
                };
            }
        } else {
         //   console.log(error
         //console.log('veio aqui depois5 erro no try final')

            return next(error);
        }
    }
}
