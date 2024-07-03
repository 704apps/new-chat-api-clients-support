import 'reflect-metadata';

import { Server as SocketIOServer } from 'socket.io';
import express, { Application, response } from 'express';
import http, { Server as HTTPServer } from 'http';
import messageRoutes from '../../routes/messageRoutes';
import {MessageController} from '../../controllers/messageController/messageController'
import router from '../../routes/messageRoutes';
import {MessageDTO} from '../../DTOs/messageDTO'
import swaggerUi from 'swagger-ui-express';


import swaggerDocs from './swagger.json'


const app: Application = express();
const server: HTTPServer = http.createServer(app);
app.use(express.json())
app.use(router)
app.use('/chat', messageRoutes);

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))

app.get("/terms", (request, response)=>{
  return response.json({
    message: "Termos de Serviço"
  });
})

 
const messageController = new MessageController();

const io: SocketIOServer = new SocketIOServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});



let users = [];
let messages = [];


io.on('connection', (socket) => {
  //Cliente envia mensagem
  socket.on('clientMessage', async (data) => {
    
    await messageController.saveMessage(data)
    const socketUser = data.supportId;
    
    if(!socketUser){
      io.to('support').emit('supportMessage', data);

    }else{
      io.to(socketUser).emit('supportMessage', data);

    }

  });



  //Suporte envia mensagem
  socket.on('supportMessage', async(data:MessageDTO) => {
     const socketProject = data.projectId;

    await messageController.saveMessage(data)

    await io.to(socketProject).emit('clientMessage', data);
    
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


