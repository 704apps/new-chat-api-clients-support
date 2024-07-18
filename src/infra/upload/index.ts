import multer from 'multer'
// import {storage} from './multerConfig'
export async function upload2(){

    const upload = multer({ dest: 'uploads/' })

}
const storage = multer.memoryStorage();

export const upload = multer({storage})