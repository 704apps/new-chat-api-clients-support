import AWS from 'aws-sdk'


export async function uploadToAws(fileName:string,fileContent:Buffer){
    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
    })

    
    const params = {
        Bucket: String(process.env.AWS_S3_BUCKET),
        Key: fileName,
        Body: fileContent,
        //ContentType: mimeType//geralmente se acha sozinho
    };

    const data = await s3.upload(params).promise();

    return data.Location

}   