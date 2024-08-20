"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRoutes = void 0;
var express_1 = require("express");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var UploadMediaController_1 = require("../../../../modules/messages/useCases/uploadMedia/UploadMediaController");
var UpdateMessageController_1 = require("../../../../modules/messages/useCases/updateMessage/UpdateMessageController");
var DeleteMessageController_1 = require("../../../../modules/messages/useCases/deleteMessage/DeleteMessageController");
var GetNewMessagesController_1 = require("../../../../modules/messages/useCases/getNewMessages/GetNewMessagesController");
var getChatsRespondingToSupportController_1 = require("../../../../modules/messages/useCases/getChatsRespondingToSupport/getChatsRespondingToSupportController");
var GetOneMessagesClientController_1 = require("../../../../modules/messages/useCases/getOneMessagesClient/GetOneMessagesClientController");
var GetSearchProjectController_1 = require("../../../../modules/messages/useCases/getSearchProject/GetSearchProjectController");
var GetSearchByWordOrPhraseController_1 = require("../../../../modules/messages/useCases/getSearchByWordOrPhrase/GetSearchByWordOrPhraseController");
var GetSearchGenerationToSupportController_1 = require("../../../../modules/messages/useCases/getSearchGenerationToSupport/GetSearchGenerationToSupportController");
var GetFilterToStatusSidebarController_1 = require("../../../../modules/messages/useCases/getFilterToStatusSidebar/GetFilterToStatusSidebarController");
var upload_1 = require("../../upload");
var messageRoutes = (0, express_1.Router)();
exports.messageRoutes = messageRoutes;
var uploadMediaController = new UploadMediaController_1.UploadMediaController();
var updateMessageController = new UpdateMessageController_1.UpdateMessageController();
var deleteMessageController = new DeleteMessageController_1.DeleteMessageController();
var getNewMessagesController = new GetNewMessagesController_1.GetNewMessagesController();
var getChatsRespondingToSupportController = new getChatsRespondingToSupportController_1.GetChatsRespondingToSupportController();
var getSearchProjectController = new GetSearchProjectController_1.GetSearchProjectController();
var getOneMessagesClientController = new GetOneMessagesClientController_1.GetOneMessagesClientController();
var getSearchByWordOrPhraseController = new GetSearchByWordOrPhraseController_1.GetSearchByWordOrPhraseController();
var getSearchGenerationToSupportController = new GetSearchGenerationToSupportController_1.GetSearchGenerationToSupportController();
var getFilterToStatusSidebarController = new GetFilterToStatusSidebarController_1.GetFilterToStatusSidebarController();
messageRoutes.post('/media_in_message/', upload_1.upload.single('file'), ensureAuthenticated_1.ensureAuthenticated, uploadMediaController.handle);
messageRoutes.patch('/update_message/:id', ensureAuthenticated_1.ensureAuthenticated, updateMessageController.handle);
messageRoutes.delete('/delete_message/:id', ensureAuthenticated_1.ensureAuthenticated, deleteMessageController.handle);
messageRoutes.get('/newmessages', ensureAuthenticated_1.ensureAuthenticated, getNewMessagesController.handle);
messageRoutes.get('/assisting/', ensureAuthenticated_1.ensureAuthenticated, getChatsRespondingToSupportController.handle);
messageRoutes.get('/messages/:id', getOneMessagesClientController.handle);
messageRoutes.get('/search_project/:id', ensureAuthenticated_1.ensureAuthenticated, getSearchProjectController.handle);
messageRoutes.get('/search_word_phrase/', ensureAuthenticated_1.ensureAuthenticated, getSearchByWordOrPhraseController.handle);
messageRoutes.get('/search_generaltosupport/', ensureAuthenticated_1.ensureAuthenticated, getSearchGenerationToSupportController.handle);
messageRoutes.get('/filter_status_attention/', ensureAuthenticated_1.ensureAuthenticated, getFilterToStatusSidebarController.handle);
