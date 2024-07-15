
import "reflect-metadata";

import { Server as SocketIOServer } from "socket.io";
import express, { Application, response } from "express";
import http, { Server as HTTPServer } from "http";
import { MessageController } from "../../modules/messages/message.controller";
import {router} from './routes'
import { MessageDTO } from "../../DTOs/message/messageDTO";
import { MessageUpdateDTO } from "../../DTOs/message/messageUpdateDTO";

import swaggerUi from "swagger-ui-express";
import cors from "cors";

import swaggerDocs from "../../api-doc/swagger.json";

const app: Application = express();
const server: HTTPServer = http.createServer(app);
app.use(
  cors({
    origin: "*", // Permite qualquer origem
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/terms", (request, response) => {
  return response.json({
    message: "Termos de Serviço",
  });
});

const messageController = new MessageController();

const io: SocketIOServer = new SocketIOServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  }
});


io.on("connection", (socket) => {
  //Cliente envia mensagem
  socket.on("clientMessage", async (data) => {
    console.log(data)
    const msg: MessageDTO = (await messageController.saveMessage(
      data
    )) as MessageDTO;

    const socketUser = data.supportId;
    const dataClient = {
      id: msg.id,
      chatId:  msg.chatId,
      userType: data.userType,
      projectId: data.projectId,
      supportId: data.supportId,
      messageType: data.messageType,
      messages: data.messages,
      origin: data.origin
    }
    if (!socketUser) {
      io.to('support').emit('supportMessage', dataClient);

    } else {
      io.to(socketUser).emit('supportMessage', data);

    }

  });




  //Suporte envia mensagem
  socket.on("supportMessage", async (data: MessageDTO) => {

    const socketProject = data.projectId;

    const msg: MessageDTO = (await messageController.saveMessage(
      data
    )) as MessageDTO;

    const dataClient = {
      id: msg.id,
      chatId:  msg.chatId,
      userType: data.userType,
      projectId: data.projectId,
      supportId: data.supportId,
      messageType: data.messageType,
      messages: data.messages,
      origin: data.origin
    }


    await io.to(socketProject).emit('clientMessage', dataClient);

  })

  socket.on("supportMsgUpdate", async (data: MessageUpdateDTO) => {
    const socketProject = data.projectId;
    const idMsg:number = data.id as number

    if (idMsg) {
      await io.to(socketProject).emit('supportMsgUpdate', data);
      await messageController.getUpdateSocketAction(idMsg)
     
    }

  })

  socket.on("statusAttentionUpdate", async () => {
    io.to('support').emit('supportMessage');
  })


  //Adiciona o cliente à sala especifica
  socket.on('joinRoom', (data) => {

    if (data.room === 'support') {
      socket.join('support');

    } else {
      const socketProject = data.projectId;
      socket.join(socketProject);

    }

  })

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });



});

server.listen(4000, () => {
  console.log('Listening on port 4000 ');
});

