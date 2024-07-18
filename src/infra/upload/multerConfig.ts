import multer from 'multer'
import path from 'path'
import {uuidGeneration} from './util/uuid.generation'

export const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,path.resolve("src","tmp"))
    },
    filename: (req,file,callback)=>{
        const uuid = uuidGeneration();
        callback(null,`${uuid}_${file.originalname}`)
    }
})