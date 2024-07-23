import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
dotenv.config();

import { Contacts } from '../../../../modules/contacts/infra/typeorm/Entities/Contacts';
import { Chats } from '../../../../modules/chats/infra/typeorm/Entities/Chats';
import { Users } from '../../../../modules/urers/infra/typeorm/Entities/Users';
import { Messages } from '../../../../modules/messages/infra/typeorm/Entities/Messages';

export const myDataSource = new DataSource(
    {
    type: "mysql",
    host: process.env.DB_HOST,
    port: 17564, //parseInt(`${process.env.DB_PORT}`),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Messages,Contacts,Users,Chats], // Ajuste o caminho conforme necessário
    migrations: ["src/infra/typeorm/migrations/*.ts"],
    synchronize: true
},

);
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