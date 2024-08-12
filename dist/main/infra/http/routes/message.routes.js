"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageRoutes = void 0;
var _express = require("express");
var _UploadMediaController = require("../../../../modules/messages/useCases/uploadMedia/UploadMediaController");
var _UpdateMessageController = require("../../../../modules/messages/useCases/updateMessage/UpdateMessageController");
var _DeleteMessageController = require("../../../../modules/messages/useCases/deleteMessage/DeleteMessageController");
var _GetNewMessagesController = require("../../../../modules/messages/useCases/getNewMessages/GetNewMessagesController");
var _getChatsRespondingToSupportController = require("../../../../modules/messages/useCases/getChatsRespondingToSupport/getChatsRespondingToSupportController");
var _GetOneMessagesClientController = require("../../../../modules/messages/useCases/getOneMessagesClient/GetOneMessagesClientController");
var _GetSearchProjectController = require("../../../../modules/messages/useCases/getSearchProject/GetSearchProjectController");
var _GetSearchByWordOrPhraseController = require("../../../../modules/messages/useCases/getSearchByWordOrPhrase/GetSearchByWordOrPhraseController");
var _GetSearchGenerationToSupportController = require("../../../../modules/messages/useCases/getSearchGenerationToSupport/GetSearchGenerationToSupportController");
var _GetFilterToStatusSidebarController = require("../../../../modules/messages/useCases/getFilterToStatusSidebar/GetFilterToStatusSidebarController");
var _upload = require("../../upload");
const messageRoutes = exports.messageRoutes = (0, _express.Router)();
const uploadMediaController = new _UploadMediaController.UploadMediaController();
const updateMessageController = new _UpdateMessageController.UpdateMessageController();
const deleteMessageController = new _DeleteMessageController.DeleteMessageController();
const getNewMessagesController = new _GetNewMessagesController.GetNewMessagesController();
const getChatsRespondingToSupportController = new _getChatsRespondingToSupportController.GetChatsRespondingToSupportController();
const getSearchProjectController = new _GetSearchProjectController.GetSearchProjectController();
const getOneMessagesClientController = new _GetOneMessagesClientController.GetOneMessagesClientController();
const getSearchByWordOrPhraseController = new _GetSearchByWordOrPhraseController.GetSearchByWordOrPhraseController();
const getSearchGenerationToSupportController = new _GetSearchGenerationToSupportController.GetSearchGenerationToSupportController();
const getFilterToStatusSidebarController = new _GetFilterToStatusSidebarController.GetFilterToStatusSidebarController();
messageRoutes.post('/media_in_message/', _upload.upload.single('file'), uploadMediaController.handle);
messageRoutes.patch('/update_message/:id', updateMessageController.handle);
messageRoutes.delete('/delete_message/:id', deleteMessageController.handle);

// // messageRoutes.use(ensureAuthenticated)
messageRoutes.get('/newmessages', getNewMessagesController.handle);
messageRoutes.get('/assisting/', getChatsRespondingToSupportController.handle);
messageRoutes.get('/messages/:id', getOneMessagesClientController.handle);
messageRoutes.get('/search_project/:id', getSearchProjectController.handle);
messageRoutes.get('/search_word_phrase/', getSearchByWordOrPhraseController.handle);
messageRoutes.get('/search_generaltosupport/', getSearchGenerationToSupportController.handle);
messageRoutes.get('/filter_status_attention/', getFilterToStatusSidebarController.handle);