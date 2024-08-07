

import "reflect-metadata";
import express, { Application, response } from "express";
import http, { Server as HTTPServer } from "http";
import {setupSocketIO} from '../sockets/index'
import { router } from './routes'
import { Server as SocketIOServer } from "socket.io";
import { errorHandler } from './middlewares/errorHandler'
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import swaggerDocs from "../../../api-doc/swagger.json";

import "../../container/index"




const app: Application = express();
export const server: HTTPServer = http.createServer(app);

export const io: SocketIOServer = new SocketIOServer(server, {
  cors: {
      origin: "*",
      methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  }
});




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


// export const io: SocketIOServer = new SocketIOServer(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
//   }
// });



server.listen(4000, () => {
  console.log('Listening on port 4000 ');
  setupSocketIO(); //inicializadno o socket
  
});



