import { S3Client, PutObjectCommand, GetObjectCommand, GetObjectRequest } from "@aws-sdk/client-s3"
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import path from 'path'
import { uuidGeneration } from '../util/uuid.generation'
import {Buffer} from 'buffer'
export async function uploadToAws(Key: string, Body: Buffer) {
    const region = process.env.AWS_REGION;
    const Bucket = String(process.env.AWS_BUCKET_NAME)

    const s3Client = new S3Client([{
        region,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
    }]);


    const fileExtesnsion = path.extname(Key)
    const name_uuid = uuidGeneration()

    Key = `${name_uuid}${fileExtesnsion}`;

    try {
        const data = await s3Client.send(
            new PutObjectCommand({
                Bucket,
                Key,
                Body,
                ACL: 'public-read'
            })
        );

        const command = new GetObjectCommand({
            Bucket,
            Key,
        });

        //await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // URL expira em 1 hora
        const url = `https://${Bucket}.s3.${region}.amazonaws.com/${Key}`

        
        return url;


    } catch (err) {
        
        throw err; // Lança o erro para ser tratado pelo código que chama a função
    }
}
