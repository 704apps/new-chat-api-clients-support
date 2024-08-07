"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autheticateRoutes = void 0;
var express_1 = require("express");
var AutenticateUserController_1 = require("../../../../modules/accounts/useCases/authenticateUser/AutenticateUserController");
var CreateUserController_1 = require("../../../../modules/accounts/useCases/createUser/CreateUserController");
var RefreshTokenUserController_1 = require("../../../../modules/accounts/useCases/refreshTokenUser/RefreshTokenUserController");
var GetOneUserController_1 = require("../../../../modules/accounts/useCases/getOneUser/GetOneUserController");
var GetOneUserByEmailController_1 = require("../../../../modules/accounts/useCases/getOneUserByEmail/GetOneUserByEmailController");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var autheticateRoutes = (0, express_1.Router)();
exports.autheticateRoutes = autheticateRoutes;
var createUserController = new CreateUserController_1.CreateUserController();
var getOneUserController = new GetOneUserController_1.GetOneUserController();
var getOneUserByEmailController = new GetOneUserByEmailController_1.GetOneUserByEmailController();
var authenticateUserController = new AutenticateUserController_1.AuthenticateUserController();
var refreshTokenUserController = new RefreshTokenUserController_1.RefreshTokenUserController();
autheticateRoutes.post("/create_user", createUserController.handle);
autheticateRoutes.post("/sessions", authenticateUserController.handle);
// autheticateRoutes.use(ensureAuthenticated)
autheticateRoutes.get("/user/:id", ensureAuthenticated_1.ensureAuthenticated, getOneUserController.handle);
autheticateRoutes.get("/search_user_byemail", getOneUserByEmailController.handle);
autheticateRoutes.post("/refresh_token", refreshTokenUserController.handle);
//# sourceMappingURL=authenticate.routes.js.map