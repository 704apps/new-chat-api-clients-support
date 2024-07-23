"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
require("reflect-metadata");
const socket_io_1 = require("socket.io");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const message_controller_1 = require("../../../modules/messages/message.controller");
const routes_1 = require("./routes");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cors_1 = __importDefault(require("cors"));
const swagger_json_1 = __importDefault(require("../../../api-doc/swagger.json"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)({
    origin: "*", // Permite qualquer origem
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));
app.use(express_1.default.json());
app.use(routes_1.router);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.get("/terms", (request, response) => {
    return response.json({
        message: "Termos de Serviço",
    });
});
const messageController = new message_controller_1.MessageController();
exports.io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    }
});
exports.io.on("connection", (socket) => {
    //Cliente envia mensagem
    socket.on("clientMessage", (data) => __awaiter(void 0, void 0, void 0, function* () {
        const msg = (yield messageController.saveMessage(data));
        console.log(data);
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
        console.log('dataClient');
        console.log(dataClient);
        console.log('dataCldsfdfdient');
        if (!socketUser) {
            exports.io.to('support').emit('supportMessage', dataClient);
        }
        else {
            exports.io.to(socketUser).emit('supportMessage', data);
        }
    }));
    //Suporte envia mensagem
    socket.on("supportMessage", (data) => __awaiter(void 0, void 0, void 0, function* () {
        const socketProject = data.projectId;
        const msg = (yield messageController.saveMessage(data));
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
        yield exports.io.to(socketProject).emit('clientMessage', dataClient);
        //await io.to('support').emit('supportMessage', dataClient);
        yield exports.io.to('support').emit('supportResponse', dataClient);
    }));
    socket.on("statusAttentionUpdate", () => __awaiter(void 0, void 0, void 0, function* () {
        exports.io.to('support').emit('supportMessage');
    }));
    //Adiciona o cliente à sala especifica
    socket.on('joinRoom', (data) => {
        if (data.room === 'support') {
            socket.join('support');
        }
        else {
            const socketProject = data.projectId;
            socket.join(socketProject);
        }
    });
    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});
server.listen(4000, () => {
    console.log('Listening on port 4000 ');
});
