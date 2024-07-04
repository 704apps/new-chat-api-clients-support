import {Router} from 'express'
import {MessageController} from '../controllers/messageController/messageController'


const router = Router()
const messageController = new MessageController();


router.get('/newmessages',(req,res)=>messageController.getMessages(req,res))
router.get('/messages/:id',(req,res)=>messageController.getOneMessage(req,res))
router.patch('/messages/:id',(req,res)=>messageController.getUpdateMessage(req,res))



export default router;