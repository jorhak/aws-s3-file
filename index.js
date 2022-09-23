import express from "express";
import fileUpload from "express-fileupload";
<<<<<<< HEAD
import {uploadFile,getFiles} from "./s3.js"
=======
import {uploadFile,getFiles,getFile} from "./s3.js"
>>>>>>> a437140 (Primer commit)

const app = express()

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}))

app.get('/files',async(req, res)=>{
    const result = await getFiles()
    res.json(result.Contents)
})

<<<<<<< HEAD
=======
app.get('/files/:fileName',async(req, res)=>{
    const result = await getFile(req.params.fileName)
    res.json(result.$metadata)
})

>>>>>>> a437140 (Primer commit)
app.post('/files',async (req, res)=>{
    const result = await uploadFile(req.files.file)
    res.json({result})
})

app.listen(3000)

console.log(`Server on port  ${3000}`)