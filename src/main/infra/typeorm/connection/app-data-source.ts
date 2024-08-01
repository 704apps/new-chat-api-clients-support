import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
dotenv.config();

import { Contacts } from '../../../../modules/contacts/infra/typeorm/Entities/Contacts';
import { Chats } from '../../../../modules/chats/infra/typeorm/Entities/Chats';
import { Users } from '../../../../modules/accounts/infra/typeorm/Entities/Users';
import { Messages } from '../../../../modules/messages/infra/typeorm/Entities/Messages';
import { RefreshToken } from '../../../../modules/refreshToken/infra/typeorm/Entities/RefreshToken'

export const myDataSource = new DataSource(
    {
        type: "mysql",
        host: process.env.DB_HOST,
        port: parseInt(`${process.env.DB_PORT}`),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [Messages, Contacts, Chats, Users, RefreshToken], // Ajuste o caminho conforme necessário
        migrations: ["src/main/infra/typeorm/migrations/*.ts"],
        synchronize: true,
        timezone: 'Z',  // Para UTC

        logging: true, // Ative o registro para ver as consultas SQL
        // logger: 'debug',
    },

);

async function initializeDataSource() {
    try {

        await myDataSource.initialize();
        console.log("Data Source has been initialized!");
    } catch (err) {
        // console.log(process.env.DB_HOST,process.env.DB_USER,process.env.DB_PASS, process.env.DB_NAME)
        console.error("Error during Data Source initialization:", err);
    }
}
initializeDataSource();