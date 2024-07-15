import {Router} from 'express'
import {MessageController} from '../../../modules/messages/message.controller'


const messageRoutes = Router()
const messageController = new MessageController();

messageRoutes.get('/newmessages',(req,res)=>messageController.getMessages(req,res))

messageRoutes.get('/messages/:id',(req,res)=>messageController.getOneMessagesClient(req,res))
messageRoutes.patch('/update_message/:id',(req,res)=>messageController.getUpdateMessage(req,res))
messageRoutes.delete('/delete_message/:id',(req,res)=>messageController.getDeleteMessage(req,res))

messageRoutes.get('/search_project/',(req,res)=>messageController.getSearchProject(req,res))
messageRoutes.get('/search_word_phrase/',(req,res)=>messageController.getSearchByWordOrPhrase(req,res))
messageRoutes.get('/search_generaltosupport/',(req,res)=>messageController.getSearchGenerationToSupport(req,res))




export  {messageRoutes};