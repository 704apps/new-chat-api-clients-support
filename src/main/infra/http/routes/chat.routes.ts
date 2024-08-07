import {Router} from 'express'

import { GetCreateChatController } from '../../../../modules/chats/useCases/getCreateChat/GetCreateChatController'
import {  UpdateStatusFinishedController} from '../../../../modules/chats/useCases/updateStatusFinished/UpdateStatusFinishedController'
import {UpdateStatusOpenController } from '../../../../modules/chats/useCases/updateStatusOpen/UpdateStatusOpenController'

const chatRouter = Router()

const getCreateChatController = new GetCreateChatController();
const updateStatusFinishedController = new UpdateStatusFinishedController();
const updateStatusOpenController = new UpdateStatusOpenController();

//chatRouter.use(ensureAuthenticated)
chatRouter.post('/create_chat/',getCreateChatController.handle)
// chatRouter.patch('/update_statusAttention/:id',(req,res)=>chatController.getUpdateStatusAttention(req,res))

chatRouter.patch('/update_statusFinished/:id',updateStatusFinishedController.handle)
chatRouter.patch('/update_statusOpen/:id',updateStatusOpenController.handle)





export {chatRouter};