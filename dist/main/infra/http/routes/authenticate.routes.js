"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autheticateRoutes = void 0;
var express_1 = require("express");
var AutenticateUserController_1 = require("../../../../modules/accounts/useCases/authenticateUser/AutenticateUserController");
var CreateUserController_1 = require("../../../../modules/accounts/useCases/createUser/CreateUserController");
var RefreshTokenUserController_1 = require("../../../../modules/accounts/useCases/refreshTokenUser/RefreshTokenUserController");
var GetOneUserController_1 = require("../../../../modules/accounts/useCases/getOneUser/GetOneUserController");
var GetOneUserByEmailController_1 = require("../../../../modules/accounts/useCases/getOneUserByEmail/GetOneUserByEmailController");
var GetAllUsersController_1 = require("../../../../modules/accounts/useCases/getAllUsers/GetAllUsersController");
var ResetPasswordNoEmailController_1 = require("../../../../modules/accounts/useCases/resetPasswordNoEmail/ResetPasswordNoEmailController");
var EditUserController_1 = require("../../../../modules/accounts/useCases/editUser/EditUserController");
var UpdateUserToSubMasterController_1 = require("../../../../modules/accounts/useCases/updateUserToSubMaster/UpdateUserToSubMasterController");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var DisableUserController_1 = require("../../../../modules/accounts/useCases/disableUser/DisableUserController");
var DeleteUserController_1 = require("../../../../modules/accounts/useCases/deleteUser/DeleteUserController");
var GetLoggedInUserController_1 = require("../../../../modules/accounts/useCases/getLoggedInUser/GetLoggedInUserController");
var upload_1 = require("../../upload");
var UploadAvatarController_1 = require("../../../../modules/accounts/useCases/uploadAvatar/UploadAvatarController");
var autheticateRoutes = (0, express_1.Router)();
exports.autheticateRoutes = autheticateRoutes;
var createUserController = new CreateUserController_1.CreateUserController();
var editUserController = new EditUserController_1.EditUserController();
var updateUserToSubMasterController = new UpdateUserToSubMasterController_1.UpdateUserToSubMasterController();
var getOneUserController = new GetOneUserController_1.GetOneUserController();
var getLoggedInUserController = new GetLoggedInUserController_1.GetLoggedInUserController();
var deleteUserController = new DeleteUserController_1.DeleteUserController();
var disableUserController = new DisableUserController_1.DisableUserController();
var getAllUsersController = new GetAllUsersController_1.GetAllUsersController();
var resetPasswordNoEmailController = new ResetPasswordNoEmailController_1.ResetPasswordNoEmailController();
var getOneUserByEmailController = new GetOneUserByEmailController_1.GetOneUserByEmailController();
var authenticateUserController = new AutenticateUserController_1.AuthenticateUserController();
var refreshTokenUserController = new RefreshTokenUserController_1.RefreshTokenUserController();
var uploadAvatarController = new UploadAvatarController_1.UploadAvatarController();
autheticateRoutes.post("/create_user", createUserController.handle);
autheticateRoutes.post("/sessions", authenticateUserController.handle);
autheticateRoutes.get("/user/:id", ensureAuthenticated_1.ensureAuthenticated, getOneUserController.handle);
autheticateRoutes.get("/logged_in_user", ensureAuthenticated_1.ensureAuthenticated, getLoggedInUserController.handle);
autheticateRoutes.post('/uploadavatar/:id', ensureAuthenticated_1.ensureAuthenticated, upload_1.upload.single('file'), uploadAvatarController.handle);
autheticateRoutes.delete("/delete_user/:id", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdminAndSubadmin, deleteUserController.handle);
autheticateRoutes.patch("/disable_user/:id", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdminAndSubadmin, disableUserController.handle);
autheticateRoutes.patch("/edit_user/:id", ensureAuthenticated_1.ensureAuthenticated, editUserController.handle);
autheticateRoutes.patch("/update_role_user/:id", ensureAdmin_1.ensureAdmin, ensureAuthenticated_1.ensureAuthenticated, updateUserToSubMasterController.handle);
autheticateRoutes.patch("/reset_password/:id", ensureAuthenticated_1.ensureAuthenticated, resetPasswordNoEmailController.handle);
autheticateRoutes.get("/users", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdminAndSubadmin, getAllUsersController.handle);
autheticateRoutes.get("/search_user_byemail", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdminAndSubadmin, getOneUserByEmailController.handle);
autheticateRoutes.post("/refresh_token", refreshTokenUserController.handle);
