import AWS from 'aws-sdk';
const { S3Client, PutObjectCommand, S3 } = require("@aws-sdk/client-s3");

export async function uploadToAws(fileName: string, fileContent: Buffer) {
    const region = process.env.AWS_REGION;

    console.log('veio1')
    const s3Client = new S3Client({
        region: process.env.AWS_REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,

        },
         endpoint: "https://s3.amazonaws.com"
    });
    console.log('veio2')

    const params ={
        Bucket: String(process.env.AWS_S3_BUCKET),
        Key: fileName,
        Body: fileContent,
        // ContentType: mimeType // opcional, dependendo do caso
    };
    
    // const data = await s3Client.send(new PutObjectCommand(params))
    // .then((data:any) => {
    //   console.log("Object uploaded successfully:", data);
    // })
    // .catch((error:Error) => {
    //   console.error("Error uploading object:", error);
    // });
    // console.log('veio3')
    // return data.Location
   
   
    try {
        const data = await s3Client.send(
            new PutObjectCommand(params)
          );;

        console.log('Arquivo enviado com sucesso para o S3:', data.Location);
        return 'deu certo';
    } catch (err) {
        console.error('Erro ao fazer upload para o S3:', err);
        throw err; // Lança o erro para ser tratado pelo código que chama a função
    }
}
