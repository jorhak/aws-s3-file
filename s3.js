<<<<<<< HEAD
import {S3Client,PutObjectCommand,ListObjectsCommand} from "@aws-sdk/client-s3"
=======
import {S3Client,PutObjectCommand,ListObjectsCommand,GetObjectCommand} from "@aws-sdk/client-s3"
>>>>>>> a437140 (Primer commit)

import {AWS_BUCKET_NAME,AWS_BUCKET_REGION,AWS_PUBLIC_KEY,AWS_SECRET_KEY} from "./config.js"

import fs from "fs"

const client = new S3Client({
    region: AWS_BUCKET_REGION,
    credentials: {
        accessKeyId: AWS_PUBLIC_KEY,
        secretAccessKey: AWS_SECRET_KEY,
    }
})

//Funcion para subir un archibo
export async function uploadFile(file){
    const stream = fs.createReadStream(file.tempFilePath)
    const uploadParams = {
        Bucket: AWS_BUCKET_NAME,
        Key: file.name,
        Body: stream,
    }
    const command = new PutObjectCommand(uploadParams)
    return await client.send(command)

}

export async function getFiles(){
    const command = new ListObjectsCommand({
        Bucket: AWS_BUCKET_NAME,
    })
    return await client.send(command)
<<<<<<< HEAD
<<<<<<< HEAD

=======
}

export async function getFile(filename){
    const command = new GetObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: filename,
    })

    return await client.send(command)
    
>>>>>>> a437140 (Primer commit)
=======
>>>>>>> b85c1fb (Primer commit)
}