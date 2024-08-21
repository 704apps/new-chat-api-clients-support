import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../../../../error/AppError';
import { verify } from 'jsonwebtoken';
import { UserRepository } from '../../../../../modules/accounts/infra/typeorm/repositories/UserRepository';


interface IPayload {
    sub: string;
}
// Middleware para verificar se o usuário é admin
async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
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
        console.log(user)

        if (user.role !== 'MASTER') {
            return next(new AppError('Access denied', 403));
        }

        next();

    } catch (error) {
        return next(error);

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
            throw new AppError('User does not exist!', 401);
        }// Supondo que o usuário autenticado é armazenado em request.user

        if (user.role !== 'SUBMASTER' && user.role !== 'MASTER') {
            return next(new AppError('Access denied', 403));
        }

        next();
    } catch (error) {
        return next(error);

    }

}

export { ensureAdmin, ensureAdminAndSubadmin };