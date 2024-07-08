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
require("reflect-metadata");
const socket_io_1 = require("socket.io");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const messageRoutes_1 = __importDefault(require("../../routes/messageRoutes"));
const messageController_1 = require("../../controllers/messageController/messageController");
const messageRoutes_2 = __importDefault(require("../../routes/messageRoutes"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use(messageRoutes_2.default);
app.use('/api', messageRoutes_1.default);
const messageController = new messageController_1.MessageController();
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
let users = [];
let messages = [];
io.on('connection', (socket) => {
    //Cliente envia mensagem
    socket.on('clientMessage', (data) => __awaiter(void 0, void 0, void 0, function* () {
        //console.log(data)
        yield messageController.saveMessage(data.userType, data.socketId, data.messageType, data.messages, data.orige);
        io.to('support').emit('supportMessage', data);
    }));
    //Suporte envia mensagem
    socket.on('supportMessage', (data) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(data);
        yield messageController.saveMessage(data.userType, data.socketId, data.messageType, data.messages, data.orige);
        io.to(data.clientId).emit('clientMessage', data);
    }));
    //Adiciona o cliente à sala especifica
    socket.on('joinRoom', (data) => {
        if (data.room === 'support') {
            socket.join('support');
        }
        else {
            socket.join(socket.id);
        }
    });
    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});
server.listen(4000, () => {
    console.log('Listening on port 4000:dfdfdfd ');
});
