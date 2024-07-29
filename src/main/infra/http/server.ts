
import "reflect-metadata";
import { Request, Response, NextFunction } from 'express'
import { Server as SocketIOServer } from "socket.io";
import express, { Application, response } from "express";
import http, { Server as HTTPServer } from "http";
import { MessageController } from "@modules/messages/message.controller";
import { router } from './routes'
import { MessageDTO } from "@modules/messages/DTOs/messageDTO";
import { AppError } from "@error/AppError";
import { errorHandler } from './middlewares/errorHandler'
//import "@main/infra/typeorm"

import "@main/container"
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import swaggerDocs from "../../../api-doc/swagger.json";

const app: Application = express();
const server: HTTPServer = http.createServer(app);
app.use(express.json());

app.use(
  cors({
    origin: "*", // Permite qualquer origem
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })

);
app.use(router);
app.use(errorHandler)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/terms", (request, response) => {
  return response.json({
    message: "Termos de Serviço",
  });
});

const messageController = new MessageController();

export const io: SocketIOServer = new SocketIOServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  }
});


io.on("connection", (socket) => {
  //Cliente envia mensagem
  socket.on("clientMessage", async (data) => {
    try {
      const msg: MessageDTO = (await messageController.saveMessage(
        data
      )) as MessageDTO;
      console.log(data)
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
      }
      console.log('dataClient')
      console.log(dataClient)
      console.log('dataCldsfdfdient')
      io.to('support').emit('supportMessage', dataClient);
      // if (!data.supportId) {
      //   io.to('support').emit('supportMessage', dataClient);
      // } else {
      //   io.to(data.supportId).emit('supportMessage', data);

      // }
    } catch (error) {
      throw new AppError('dfdfdf')
    }
  });




  //Suporte envia mensagem
  socket.on("supportMessage", async (data: MessageDTO) => {
    try {


      const socketProject = data.projectId;

      const msg: MessageDTO = (await messageController.saveMessage(
        data
      )) as MessageDTO;


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
      }

      console.log(dataClient)


      await io.to(socketProject).emit('clientMessage', dataClient);
      //await io.to('support').emit('supportMessage', dataClient);
      await io.to('support').emit('supportResponse', dataClient);
    } catch (error) {
      throw new AppError('dfdfdf')
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

