import "reflect-metadata";
import { Server as HTTPServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import "../../container/index";
export declare const server: HTTPServer;
export declare const io: SocketIOServer;
