"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
var AppError_1 = require("../../../../error/AppError");
function errorHandler(err, request, response, next) {
    //console.log('entrou aqui');
    // Verifica se o erro é uma instância do AppError
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            status: err.statusCode,
            message: err.message,
            error: err.error || null // Caso queira incluir mais detalhes
        });
    }
    // Para qualquer outro erro, que não seja AppError, exiba a mensagem original do erro.
    return response.status(500).json({
        status: 500,
        message: err.message, // Aqui ele exibirá a mensagem do erro
    });
}
