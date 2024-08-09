"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autheticateRoutes = void 0;
var _express = require("express");
var _AutenticateUserController = require("../../../../modules/accounts/useCases/authenticateUser/AutenticateUserController");
var _CreateUserController = require("../../../../modules/accounts/useCases/createUser/CreateUserController");
var _RefreshTokenUserController = require("../../../../modules/accounts/useCases/refreshTokenUser/RefreshTokenUserController");
var _GetOneUserController = require("../../../../modules/accounts/useCases/getOneUser/GetOneUserController");
var _GetOneUserByEmailController = require("../../../../modules/accounts/useCases/getOneUserByEmail/GetOneUserByEmailController");
var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const autheticateRoutes = exports.autheticateRoutes = (0, _express.Router)();
const createUserController = new _CreateUserController.CreateUserController();
const getOneUserController = new _GetOneUserController.GetOneUserController();
const getOneUserByEmailController = new _GetOneUserByEmailController.GetOneUserByEmailController();
const authenticateUserController = new _AutenticateUserController.AuthenticateUserController();
const refreshTokenUserController = new _RefreshTokenUserController.RefreshTokenUserController();
autheticateRoutes.post("/create_user", createUserController.handle);
autheticateRoutes.post("/sessions", authenticateUserController.handle);

// autheticateRoutes.use(ensureAuthenticated)
autheticateRoutes.get("/user/:id", _ensureAuthenticated.ensureAuthenticated, getOneUserController.handle);
autheticateRoutes.get("/search_user_byemail", getOneUserByEmailController.handle);
autheticateRoutes.post("/refresh_token", refreshTokenUserController.handle);