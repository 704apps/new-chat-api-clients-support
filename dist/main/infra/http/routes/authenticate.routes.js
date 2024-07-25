"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autheticateRoutes = void 0;
const express_1 = require("express");
const AutenticateUserController_1 = require("@modules/accounts/useCases/authenticateUser/AutenticateUserController");
const autheticateRoutes = (0, express_1.Router)();
exports.autheticateRoutes = autheticateRoutes;
const authenticateUserController = new AutenticateUserController_1.AuthenticateUserController();
autheticateRoutes.post("/sessions", authenticateUserController.handle);
