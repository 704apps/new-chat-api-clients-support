import {Router} from 'express'
import {MessageController} from '../controllers/messageController/messageController'


const router = Router()
const messageController = new MessageController();


router.get('/messages',(req,res)=>messageController.getMessages(req,res))
router.get('/messages/:id',(req,res)=>messageController.getOneMessage(req,res))



export default router;