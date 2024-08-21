import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../../error/AppError';
function errorHandler(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  //console.log('entrou aqui');

  // Verifica se o erro é uma instância do AppError
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
      error: err.error || null // Caso queira incluir mais detalhes
    });
  }

  // Para qualquer outro erro, que não seja AppError, exiba a mensagem original do erro.

  return response.status(500).json({
    status: 500,
    message: 'internal error', // Aqui ele exibirá a mensagem do erro
  });
}

export {errorHandler}