import "reflect-metadata";
import express, { Application } from "express";
import http, { Server as HTTPServer } from "http";
import { setupSocketIO } from "../sockets/index";
import { router } from "./routes";
import { Server as SocketIOServer } from "socket.io";
import { errorHandler } from "./middlewares/errorHandler";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import swaggerDocs from "../../../api-doc/swagger.json";
import path from "path";
import "../../container/index";

const app: Application = express();
export const server: HTTPServer = http.createServer(app);

// Configuração do Socket.IO com CORS
export const io: SocketIOServer = new SocketIOServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  },
});

// Middleware para JSON
app.use(express.json());

// Configuração de CORS para a API
app.use(
  cors({
    origin: "*", // Permite qualquer origem
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Configuração adicional de cabeçalhos de resposta para CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Rotas da aplicação
app.use(router);
app.use(errorHandler);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.static(path.join(__dirname, "..", "..", "..", "public")));

// Rota para termos de serviço
app.get("/terms", (request, response) => {
  return response.json({
    message: "Termos de Serviço",
  });
});

// Inicialização do servidor
server.listen(process.env.PORT, () => {
  setupSocketIO(); // Inicializando o socket
});
