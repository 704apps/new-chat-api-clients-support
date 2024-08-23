import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../../../../error/AppError';
import { verify ,TokenExpiredError } from 'jsonwebtoken';
import { UserRepository } from '../../../../../modules/accounts/infra/typeorm/repositories/UserRepository';


interface IPayload {
    sub: string;
}
// Middleware para verificar se o usuário é admin
async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    try {
        const authHeader = request.headers.authorization;
       // console.log('veio aqui no admin')

        if (!authHeader) {
            throw new AppError('Token missing', 401);
        }
       // console.log('veio aqui no admin2')

        const [, token] = authHeader.split(' ');
//console.log('veio aqui no admin3')
        try {
            const { sub: userId } = verify(token, process.env.SECRET_JWT) as IPayload;
          //  console.log('veio aqui no admin4')
            const userRepository = new UserRepository();
          //  console.log('veio aqui no admin5')

            const user = await userRepository.findById(userId);
         //   console.log('veio aqui no admin6')

            if (!user) {
          //      console.log('veio aqui no erro user')
                return next(new AppError('Access denied', 403));
            }

            if (user.role !== 'MASTER') {
                return next(new AppError('Access denied', 403));
            }
            next();
        } catch (error) {
            if (error instanceof TokenExpiredError) {
                throw new AppError('Invalid token', 401);
              }
            
              // Outros erros podem ser tratados aqui
              throw new AppError('Invalid token.', 401);
        }
        
      

    } catch (error) {
        return next(new AppError('Access denied', 403));

    }
}

// Middleware para verificar se o usuário é subadmin
async function ensureAdminAndSubadmin(request: Request, response: Response, next: NextFunction) {
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
            return next(new AppError('Access denied', 403));
        }// Supondo que o usuário autenticado é armazenado em request.user

        if (user.role !== 'SUBMASTER' && user.role !== 'MASTER') {
            return next(new AppError('Access denied', 403));
        }

        next();
    } catch (error) {
        return next(new AppError('Access denied', 403));

    }

}

export { ensureAdmin, ensureAdminAndSubadmin };