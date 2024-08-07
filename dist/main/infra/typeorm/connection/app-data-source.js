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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
var typeorm_1 = require("typeorm");
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var Contacts_1 = require("../../../../modules/contacts/infra/typeorm/Entities/Contacts");
var Chats_1 = require("../../../../modules/chats/infra/typeorm/Entities/Chats");
var Users_1 = require("../../../../modules/accounts/infra/typeorm/Entities/Users");
var Messages_1 = require("../../../../modules/messages/infra/typeorm/Entities/Messages");
var RefreshToken_1 = require("../../../../modules/refreshToken/infra/typeorm/Entities/RefreshToken");
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
exports.myDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt("".concat(process.env.DB_PORT)),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Messages_1.Messages, Contacts_1.Contacts, Chats_1.Chats, Users_1.Users, RefreshToken_1.RefreshToken], // Ajuste o caminho conforme necessário
    migrations: ["../migrations/*"],
    synchronize: true,
    timezone: 'Z', // Para UTC
    //: true, // Ative o registro para ver as consultas SQL
    // logger: 'debug',
});
function initializeDataSource() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, exports.myDataSource.initialize()];
                case 1:
                    _a.sent();
                    console.log("Data Source has been initialized!");
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    // console.log(process.env.DB_HOST,process.env.DB_USER,process.env.DB_PASS, process.env.DB_NAME)
                    console.error("Error during Data Source initialization:", err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
initializeDataSource();
//# sourceMappingURL=app-data-source.js.map