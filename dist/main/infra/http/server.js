"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = exports.io = void 0;
require("reflect-metadata");
var _express = _interopRequireDefault(require("express"));
var _http = _interopRequireDefault(require("http"));
var _index = require("../sockets/index");
var _routes = require("./routes");
var _socket = require("socket.io");
var _errorHandler = require("./middlewares/errorHandler");
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swagger = _interopRequireDefault(require("../../../api-doc/swagger.json"));
var _path = _interopRequireDefault(require("path"));
require("../../container/index");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const cors = require('cors');
const app = (0, _express.default)();
const server = exports.server = _http.default.createServer(app);

// Configuração do Socket.IO com CORS
const io = exports.io = new _socket.Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"]
  }
});

// Middleware para JSON
app.use(_express.default.json());

// Configuração de CORS para a API
app.use(cors({
  origin: "*",
  // Permite qualquer origem
  methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Configuração adicional de cabeçalhos de resposta para CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH, OPTIONS");
  next();
});

// Rotas da aplicação
app.use(_routes.router);
app.use(_errorHandler.errorHandler);
app.use("/api-docs", _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.default));
app.use(_express.default.static(_path.default.join(__dirname, "..", "..", "..", "public")));

// Rota para termos de serviço
app.get("/terms", (request, response) => {
  return response.json({
    message: "Termos de Serviço"
  });
});

// Inicialização do servidor
server.listen(process.env.PORT, () => {
  (0, _index.setupSocketIO)(); // Inicializando o socket
});