"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const Contacts_1 = require("../../../../modules/contacts/infra/typeorm/Entities/Contacts");
const Chats_1 = require("../../../../modules/chats/infra/typeorm/Entities/Chats");
const Users_1 = require("../../../../modules/urers/infra/typeorm/Entities/Users");
const Messages_1 = require("../../../../modules/messages/infra/typeorm/Entities/Messages");
exports.myDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 17564, //parseInt(`${process.env.DB_PORT}`),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Messages_1.Messages, Contacts_1.Contacts, Users_1.Users, Chats_1.Chats], // Ajuste o caminho conforme necessário
    migrations: ["src/infra/typeorm/migrations/*.ts"],
    synchronize: true
});
/*
async function initializeDataSource() {
    try {

        await myDataSource.initialize();
        console.log("Data Source has been initialized!");
    } catch (err) {
        console.log(process.env.DB_HOST,process.env.DB_USER,process.env.DB_PASS, process.env.DB_NAME)
        console.error("Error during Data Source initialization:", err);
    }
}
initializeDataSource();*/ 
