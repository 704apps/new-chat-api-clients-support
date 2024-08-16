import {Router} from 'express'

import { GetCreateChatController } from '../../../../modules/chats/useCases/getCreateChat/GetCreateChatController'
import {  UpdateStatusFinishedController} from '../../../../modules/chats/useCases/updateStatusFinished/UpdateStatusFinishedController'
import {UpdateStatusOpenController } from '../../../../modules/chats/useCases/updateStatusOpen/UpdateStatusOpenController'
import { GetCreateNoteController } from '../../../../modules/notes/useCases/getCreateNote/GetCreateNoteController'
import { GetUpdateNoteController } from '../../../../modules/notes/useCases/getUpdateNote/GetUpdateNoteController'
import { DeleteNoteController } from '../../../../modules/notes/useCases/deleteNote/DeleteNoteController'
import { GetOneNoteController } from '../../../../modules/notes/useCases/getOneNote/GetOneNoteController'

const noteRouter = Router()

const getCreateNoteController = new GetCreateNoteController();
const getUpdateNoteController = new GetUpdateNoteController();
const deleteNoteController = new DeleteNoteController();
const getOneNoteController = new GetOneNoteController();

//chatRouter.use(ensureAuthenticated)
noteRouter.post('/create_note/',getCreateNoteController.handle)
noteRouter.get('/get_note/:id',getOneNoteController.handle)
noteRouter.patch('/edit_note/:id',getUpdateNoteController.handle)
noteRouter.delete('/delete_note/:id',deleteNoteController.handle)


// chatRouter.patch('/update_statusAttention/:id',(req,res)=>chatController.getUpdateStatusAttention(req,res))





export {noteRouter};