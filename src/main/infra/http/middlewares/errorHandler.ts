import { NextFunction, Request, Response } from 'express';
import { AppError } from '@error/AppError';
export function errorHandler(
    err: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    console.log('entrou aqui')
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
        error: err.error
      });
    }
    console.log('veio aqui error') 
    console.error(err);
  
    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error'
    });
  }