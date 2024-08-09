"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myDataSource = void 0;
var _typeorm = require("typeorm");
var dotenv = _interopRequireWildcard(require("dotenv"));
var _Contacts = require("../../../../modules/contacts/infra/typeorm/Entities/Contacts");
var _Chats = require("../../../../modules/chats/infra/typeorm/Entities/Chats");
var _Users = require("../../../../modules/accounts/infra/typeorm/Entities/Users");
var _Messages = require("../../../../modules/messages/infra/typeorm/Entities/Messages");
var _RefreshToken = require("../../../../modules/refreshToken/infra/typeorm/Entities/RefreshToken");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
dotenv.config();
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

const myDataSource = exports.myDataSource = new _typeorm.DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(`${process.env.DB_PORT}`),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [_Messages.Messages, _Contacts.Contacts, _Chats.Chats, _Users.Users, _RefreshToken.RefreshToken],
  // Ajuste o caminho conforme necessário
  migrations: ["../migrations/*"],
  synchronize: true,
  timezone: 'Z' // Para UTC

  //: true, // Ative o registro para ver as consultas SQL
  // logger: 'debug',
});
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