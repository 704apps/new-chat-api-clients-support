import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../../../../error/AppError';
import { verify } from 'jsonwebtoken';
import { UserRepository } from '../../../../../modules/accounts/infra/typeorm/repositories/UserRepository';


interface IPayload {
    sub: string;
}
// Middleware para verificar se o usuário é admin
async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
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

    // if (user.role !== 'admin') {
    //     return next(new AppError('Access denied', 403));
    // }

  next();
}

// Middleware para verificar se o usuário é subadmin
async function ensureSubadmin(request: Request, response: Response, next: NextFunction) {
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
    }// Supondo que o usuário autenticado é armazenado em request.user

//   if (user.role !== 'subadmin' && user.role !== 'admin') {
//     return next(new AppError('Access denied', 403));
//   }

  next();
}

export { ensureAdmin, ensureSubadmin };