import {Router} from 'express'
import {MessageController} from '../../../controllers/message/message.controller'
import {ChatController} from '../../../controllers/chats/chatController'


const chatRouter = Router()
const chatController = new ChatController();


chatRouter.post('/create_chat/',(req,res)=>chatController.getCreateChat(req,res))
chatRouter.patch('/update_statusAttention/:id',(req,res)=>chatController.getUpdateStatusAttention(req,res))
chatRouter.patch('/update_statusFinished/:id',(req,res)=>chatController.getStatusFinished(req,res))




export {chatRouter};