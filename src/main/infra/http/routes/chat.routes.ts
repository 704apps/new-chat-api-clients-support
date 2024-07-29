import {Router} from 'express'
import {ChatController} from '@modules/chats/chats.controller'
import {ensureAuthenticated} from '../middlewares/ensureAuthenticated'

const chatRouter = Router()
const chatController = new ChatController();


// chatRouter.use(ensureAuthenticated)
chatRouter.post('/create_chat/',(req,res)=>chatController.getCreateChat(req,res))
// chatRouter.patch('/update_statusAttention/:id',(req,res)=>chatController.getUpdateStatusAttention(req,res))

chatRouter.patch('/update_statusFinished/:id',(req,res)=>chatController.updateStatusFinished(req,res))
chatRouter.patch('/update_statusOpen/:id',(req,res)=>chatController.updateStatusOpen(req,res))





export {chatRouter};