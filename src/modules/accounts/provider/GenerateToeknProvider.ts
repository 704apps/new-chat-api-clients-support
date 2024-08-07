import { sign } from 'jsonwebtoken';

class GenerateTokenProvider {

    async execute(userId: string) {

        const secretKey = String(process.env.SECRET_JWT)
        console.log(userId)
        const token = sign(
            {}, 
            secretKey, {
            subject: `${userId}`, // Define o subject (assunto) do token
            expiresIn: '20s'  // Define a expiração do token para 1 hora
        })

        return token
    }
}

export { GenerateTokenProvider }