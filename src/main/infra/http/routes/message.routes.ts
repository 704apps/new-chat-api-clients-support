import {Router} from 'express'
import {ensureAuthenticated} from '../middlewares/ensureAuthenticated'
import {UploadMediaController} from '../../../../modules/messages/useCases/uploadMedia/UploadMediaController'

import {UpdateMessageController} from '../../../../modules/messages/useCases/updateMessage/UpdateMessageController'
import {DeleteMessageController} from '../../../../modules/messages/useCases/deleteMessage/DeleteMessageController'

import {GetNewMessagesController} from '../../../../modules/messages/useCases/getNewMessages/GetNewMessagesController'

import {GetChatsRespondingToSupportController} from '../../../../modules/messages/useCases/getChatsRespondingToSupport/getChatsRespondingToSupportController'
import {GetOneMessagesClientController} from '../../../../modules/messages/useCases/getOneMessagesClient/GetOneMessagesClientController'
import {GetOldMessagesController} from '../../../../modules/messages/useCases/getOldMessages/GetOldMessagesController'

import {GetSearchProjectController} from '../../../../modules/messages/useCases/getSearchProject/GetSearchProjectController'

import {GetSearchByWordOrPhraseController} from '../../../../modules/messages/useCases/getSearchByWordOrPhrase/GetSearchByWordOrPhraseController'
import {GetSearchGenerationToSupportController} from '../../../../modules/messages/useCases/getSearchGenerationToSupport/GetSearchGenerationToSupportController'
import {GetFilterToStatusSidebarController} from '../../../../modules/messages/useCases/getFilterToStatusSidebar/GetFilterToStatusSidebarController'



import { upload } from '../../upload';





const messageRoutes = Router()
const uploadMediaController = new UploadMediaController();
const updateMessageController = new UpdateMessageController();
const deleteMessageController = new DeleteMessageController();
const getNewMessagesController = new GetNewMessagesController();
const getChatsRespondingToSupportController = new GetChatsRespondingToSupportController();
const getSearchProjectController = new GetSearchProjectController();
const getOneMessagesClientController = new GetOneMessagesClientController();
const getOldMessagesController = new GetOldMessagesController();


const getSearchByWordOrPhraseController = new GetSearchByWordOrPhraseController();
const getSearchGenerationToSupportController = new GetSearchGenerationToSupportController()
const getFilterToStatusSidebarController = new GetFilterToStatusSidebarController()




messageRoutes.post('/media_in_message/',upload.single('file'),ensureAuthenticated,uploadMediaController.handle)

messageRoutes.patch('/update_message/:id',ensureAuthenticated,updateMessageController.handle)
messageRoutes.delete('/delete_message/:id',ensureAuthenticated,deleteMessageController.handle)


messageRoutes.get('/newmessages',ensureAuthenticated, getNewMessagesController.handle)
messageRoutes.get('/assisting/',ensureAuthenticated, getChatsRespondingToSupportController.handle)

messageRoutes.get('/messages/:id', getOneMessagesClientController.handle)
messageRoutes.get('/oldMessages/:id', getOldMessagesController.handle)

messageRoutes.get('/search_project/:id',ensureAuthenticated, getSearchProjectController.handle)
messageRoutes.get('/search_word_phrase/',ensureAuthenticated, getSearchByWordOrPhraseController.handle)
messageRoutes.get('/search_generaltosupport/',ensureAuthenticated, getSearchGenerationToSupportController.handle)

messageRoutes.get('/filter_status_attention/',ensureAuthenticated, getFilterToStatusSidebarController.handle)




export  {messageRoutes};