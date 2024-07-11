import {Router} from 'express'
import {MessageController} from '../controllers/message/messageController'
import {ChatController} from '../controllers/chats/chatController'


const router = Router()
const messageController = new MessageController();
const chatController = new ChatController();

//messages
router.get('/newmessages',(req,res)=>messageController.getMessages(req,res))
router.get('/messages/:id',(req,res)=>messageController.getOneMessagesClient(req,res))
router.patch('/update_message/:id',(req,res)=>messageController.getUpdateMessage(req,res))
router.delete('/delete_message/:id',(req,res)=>messageController.getDeleteMessage(req,res))

//chats
router.post('/create_chat/',(req,res)=>chatController.getCreateChat(req,res))
router.patch('/update_statusAttention/:id',(req,res)=>chatController.getUpdateStatusAttention(req,res))



export default router;