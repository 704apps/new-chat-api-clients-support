declare class AppError {
    readonly message: string;
    readonly statusCode: number;
    readonly error: Record<string, any> | undefined;
    constructor(message: string, statusCode?: number, error?: Record<string, any>);
}
export { AppError };
