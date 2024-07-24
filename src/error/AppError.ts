export class AppError{
    public readonly message: string;

    public readonly statusCode: number;
    public readonly error: Record<string ,any>;
    constructor (message:string,statusCode = 400,error: Record<string,any>={}){
        this.message = message;
        this.statusCode = statusCode
        this.error= error;
        
    }
}