import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
dotenv.config();

import { Contacts } from '../Entities/Contacts';
import { Chats } from '../Entities/Chats';
import { Users } from '../Entities/Users';
import { Messages } from '../Entities/Messages';

export const myDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(`${process.env.DB_PORT}`),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Messages,Contacts,Users,Chats], // Ajuste o caminho conforme necessário
    migrations: ["src/infra/typeorm/migrations/*.ts"],
    synchronize: true
});
