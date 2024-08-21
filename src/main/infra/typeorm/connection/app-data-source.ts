import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
dotenv.config();
import fs from 'fs'
import path from 'path';

import { Contacts } from '../../../../modules/contacts/infra/typeorm/Entities/Contacts';
import { Chats } from '../../../../modules/chats/infra/typeorm/Entities/Chats';
import { Users } from '../../../../modules/accounts/infra/typeorm/Entities/Users';
import { Messages } from '../../../../modules/messages/infra/typeorm/Entities/Messages';
import { RefreshToken } from '../../../../modules/refreshToken/infra/typeorm/Entities/RefreshToken'
import { Notes } from "../../../../modules/notes/infra/typeorm/Entities/Notes";

// async function getMigrationFiles(): Promise<string[]> {
//     const migrationsDir = path.join(__dirname, 'migrations'); // Ajuste conforme necessário

//     try {
//         const files = await fs.promises.readdir(migrationsDir);
//         const isUsingJs = migrationFiles.some(file => file.endsWith('.js'));
//         const typeFile = await  files.filter(file => file.endsWith('.ts') || file.endsWith('.js')).map(file => path.join(migrationsDir, file));

//         const migrationsPath = isUsingJs ? 'dist/main/infra/typeorm/migrations/*.js' : 'src/main/infra/typeorm/migrations/*.ts';
//         return ''
//         // Verifica a extensão dos arquivos e retorna apenas arquivos .ts ou .js
//     } catch (error) {
//         console.error(`Erro ao ler o diretório de migrações:`, error);
//         return [];
//     }
// }

// const migrationFiles = await getMigrationFiles();
        
// Verifica a extensão do primeiro arquivo de migração para decidir o caminho

export const myDataSource = new DataSource(
    {
        type: "mysql",
        host: process.env.DB_HOST,
        port: parseInt(`${process.env.DB_PORT}`),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [Messages, Contacts, Chats, Users, RefreshToken,Notes], // Ajuste o caminho conforme necessário
        migrations: ["dist/main/infra/typeorm/migrations/*.js"],
        synchronize: true,
        timezone: 'Z',  // Para UTC

        
        //: true, // Ative o registro para ver as consultas SQL
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