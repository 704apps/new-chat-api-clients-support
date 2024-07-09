
import "reflect-metadata";

import { Server as SocketIOServer } from "socket.io";
import express, { Application, response } from "express";
import http, { Server as HTTPServer } from "http";
import messageRoutes from "../../routes/messageRoutes";
import { MessageController } from "../../controllers/messageController/messageController";
import router from "../../routes/messageRoutes";
import { MessageDTO } from "../../DTOs/messageDTO";
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
app.use("/chat", messageRoutes);

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







let users = [];
let messages = [];

io.on("connection", (socket) => {
  //Cliente envia mensagem
  socket.on("clientMessage", async (data) => {
    const msg: MessageDTO = (await messageController.saveMessage(
      data
    )) as MessageDTO;

    const socketUser = data.supportId;
    const dataClient = {
      id: msg.id,
      userType: data.userType,
      socketId: data.socketId,
      projectId: data.projectId,
      supportId: data.supportId,
      messageType: data.messageType,
      messages: data.messages,
      orige: data.orige
    }  
    if (!socketUser) {
      io.to('support').emit('supportMessage', dataClient);

    } else {
      io.to(socketUser).emit('supportMessage', data);

    }

  });



  //Suporte envia mensagem


  //Suporte envia mensagem
  socket.on("supportMessage", async (data: MessageDTO) => {

    const socketProject = data.projectId;

    const msg: MessageDTO = (await messageController.saveMessage(
      data
    )) as MessageDTO;

    const dataClient = {
      id: msg.id,
      userType: data.userType,
      socketId: data.socketId,
      projectId: data.projectId,
      supportId: data.supportId,
      messageType: data.messageType,
      messages: data.messages,
      orige: data.orige
    }  
   

    await io.to(socketProject).emit('clientMessage', dataClient);

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

