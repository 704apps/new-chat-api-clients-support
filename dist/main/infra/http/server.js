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
var _cors = _interopRequireDefault(require("cors"));
var _swagger = _interopRequireDefault(require("../../../api-doc/swagger.json"));
require("../../container/index");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const path = require("path");
const app = (0, _express.default)();
const server = exports.server = _http.default.createServer(app);
const io = exports.io = new _socket.Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"]
  }
});
app.use(_express.default.json());
app.use((0, _cors.default)({
  origin: "*",
  // Permite qualquer origem
  methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
app.use(_routes.router);
app.use(_errorHandler.errorHandler);
app.use("/api-docs", _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.default));
app.use(_express.default.static(path.join(__dirname, "..", "..", "..", "public")));
app.get("/terms", (request, response) => {
  return response.json({
    message: "Termos de Serviço"
  });
});

// export const io: SocketIOServer = new SocketIOServer(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
//   }
// });

server.listen(process.env.PORT, () => {
  console.log("Listening on port 4000 ");
  (0, _index.setupSocketIO)(); //inicializando o socket
});