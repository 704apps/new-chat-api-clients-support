"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupSocketIO = setupSocketIO;
var _SaveMessageController = require("../../../modules/messages/useCases/saveMessages/SaveMessageController");
var _AppError = require("../../../error/AppError");
var _server = require("../http/server");
const saveMessageController = new _SaveMessageController.SaveMessageController();
console.log("SocketIOServer created");
function setupSocketIO() {
  _server.io.on("connection", socket => {
    //Cliente envia mensagem
    socket.on("clientMessage", async data => {
      try {
        const msg = await saveMessageController.saveMessage(data);
        const socketUser = data.supportId;
        const dataClient = {
          id: msg.id,
          chatId: msg.chatId,
          key: data.key,
          userType: data.userType,
          projectId: data.projectId,
          supportId: data.supportId,
          messageType: data.messageType,
          messages: data.messages,
          origin: data.origin,
          createdAt: msg.createdAt
        };
        _server.io.to('support').emit('supportMessage', dataClient);
        // if (!data.supportId) {
        //   io.to('support').emit('supportMessage', dataClient);
        // } else {
        //   io.to(data.supportId).emit('supportMessage', data);

        // }
      } catch (error) {
        throw new _AppError.AppError('Unexpected error', 400, {
          error
        });
      }
    });
    socket.on("answerCall", data => {
      const socketId = data.projectId;
      if (socketId) {
        _server.io.to(socketId).emit("returnCall", data.signal);
      }
    });
    socket.on("callUserClient", async data => {
      try {
        const dataCall = {
          ...data,
          signal: data.signalData,
          from: data.from
        };
        _server.io.to('support').emit("callUserSupport", dataCall);
      } catch (error) {
        throw new _AppError.AppError('Unexpected error', 400, {
          error
        });
      }
    });
    socket.on("callUserSupport", async data => {
      try {
        const socketId = data.projectId;
        const dataCall = {
          ...data,
          signal: data.signal,
          from: data.from
        };
        if (socketId) {
          _server.io.to(socketId).emit("callUserClient", dataCall);
        }
      } catch (error) {
        throw new _AppError.AppError('Unexpected error', 400, {
          error
        });
      }
    });
    //Suporte envia mensagem
    socket.on("supportMessage", async data => {
      try {
        const socketProject = data.projectId;
        console.log(data);
        const msg = await saveMessageController.saveMessage(data);
        const dataClient = {
          id: msg.id,
          chatId: msg.chatId,
          key: data.key,
          userType: data.userType,
          projectId: data.projectId,
          supportId: data.supportId,
          messageType: data.messageType,
          messages: data.messages,
          origin: data.origin,
          createdAt: msg.createdAt
        };
        console.log(dataClient);
        await _server.io.to(socketProject).emit('clientMessage', dataClient);
        //await io.to('support').emit('supportMessage', dataClient);
        await _server.io.to('support').emit('supportResponse', dataClient);
      } catch (error) {
        throw new _AppError.AppError('Unexpected error', 400, {
          error
        });
      }
    });
    socket.on("statusAttentionUpdate", async () => {
      _server.io.to('support').emit('supportMessage');
    });

    //Adiciona o cliente à sala especifica
    socket.on('joinRoom', data => {
      if (data.room === 'support') {
        socket.join('support');
      } else {
        const socketProject = data.projectId;
        socket.join(socketProject);
      }
    });
    socket.on('disconnect', () => {
      console.log('Cliente desconectado');
    });
  });
}