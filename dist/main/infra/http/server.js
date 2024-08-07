"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.server = void 0;
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var index_1 = require("../sockets/index");
var routes_1 = require("./routes");
var socket_io_1 = require("socket.io");
var errorHandler_1 = require("./middlewares/errorHandler");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var cors_1 = __importDefault(require("cors"));
var swagger_json_1 = __importDefault(require("../../../api-doc/swagger.json"));
require("../../container/index");
var app = (0, express_1.default)();
exports.server = http_1.default.createServer(app);
exports.io = new socket_io_1.Server(exports.server, {
    cors: {
        origin: "*",
        methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    }
});
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "*", // Permite qualquer origem
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));
app.use(routes_1.router);
app.use(errorHandler_1.errorHandler);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.get("/terms", function (request, response) {
    return response.json({
        message: "Termos de Serviço",
    });
});
// export const io: SocketIOServer = new SocketIOServer(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
//   }
// });
exports.server.listen(4000, function () {
    console.log('Listening on port 4000 ');
    (0, index_1.setupSocketIO)(); //inicializadno o socket
});
//# sourceMappingURL=server.js.map