import multer from 'multer'
export async function upload(){

    const upload = multer({ dest: 'uploads/' })

}