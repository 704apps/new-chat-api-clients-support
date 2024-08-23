import {Router} from 'express'

import { GetCreateChatController } from '../../../../modules/chats/useCases/getCreateChat/GetCreateChatController'
import {  UpdateStatusFinishedController} from '../../../../modules/chats/useCases/updateStatusFinished/UpdateStatusFinishedController'
import {UpdateStatusOpenController } from '../../../../modules/chats/useCases/updateStatusOpen/UpdateStatusOpenController'
import { GetCreateNoteController } from '../../../../modules/notes/useCases/getCreateNote/GetCreateNoteController'
import { GetUpdateNoteController } from '../../../../modules/notes/useCases/getUpdateNote/GetUpdateNoteController'
import { DeleteNoteController } from '../../../../modules/notes/useCases/deleteNote/DeleteNoteController'
import { GetOneNoteController } from '../../../../modules/notes/useCases/getOneNote/GetOneNoteController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { GetAllNoteChatController } from '../../../../modules/notes/useCases/getAllNoteChat/GetAllNoteChatController'

const noteRouter = Router()

const getCreateNoteController = new GetCreateNoteController();
const getUpdateNoteController = new GetUpdateNoteController();
const deleteNoteController = new DeleteNoteController();
const getOneNoteController = new GetOneNoteController();
const getAllNoteChatController = new GetAllNoteChatController();

//chatRouter.use(ensureAuthenticated)
noteRouter.post('/create_note/',ensureAuthenticated,getCreateNoteController.handle)
noteRouter.get('/get_note/:id',ensureAuthenticated,getOneNoteController.handle)
noteRouter.patch('/edit_note/:id',ensureAuthenticated,getUpdateNoteController.handle)
noteRouter.delete('/delete_note/:id',ensureAuthenticated,deleteNoteController.handle)
noteRouter.get('/notes/:id',ensureAuthenticated,getAllNoteChatController.handle)


// chatRouter.patch('/update_statusAttention/:id',(req,res)=>chatController.getUpdateStatusAttention(req,res))





export {noteRouter};