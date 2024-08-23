import { sign } from 'jsonwebtoken';

class GenerateTokenProvider {

    async execute(userId: string) {

        const secretKey = String(process.env.SECRET_JWT)
       // console.log(userId)
        const token = sign(
            {}, 
            secretKey, {
            subject: `${userId}`, // Define o subject (assunto) do token
            expiresIn: '24h'  // Define a expiração do token para 24 hora
        })

        return token
    }
}

export { GenerateTokenProvider }