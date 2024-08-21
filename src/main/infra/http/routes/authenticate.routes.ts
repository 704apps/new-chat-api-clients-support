import {Router} from "express"


import { AuthenticateUserController } from "../../../../modules/accounts/useCases/authenticateUser/AutenticateUserController"
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController"
import { RefreshTokenUserController } from "../../../../modules/accounts/useCases/refreshTokenUser/RefreshTokenUserController"
import { GetOneUserController } from "../../../../modules/accounts/useCases/getOneUser/GetOneUserController"
import { GetOneUserByEmailController } from "../../../../modules/accounts/useCases/getOneUserByEmail/GetOneUserByEmailController"
import { GetAllUsersController } from "../../../../modules/accounts/useCases/getAllUsers/GetAllUsersController"
import { ResetPasswordNoEmailController } from "../../../../modules/accounts/useCases/resetPasswordNoEmail/ResetPasswordNoEmailController"
import { EditUserController } from "../../../../modules/accounts/useCases/editUser/EditUserController"
import { UpdateUserToSubMasterController } from "../../../../modules/accounts/useCases/updateUserToSubMaster/UpdateUserToSubMasterController"

import {ensureAuthenticated} from '../middlewares/ensureAuthenticated'
import {ensureAdmin,ensureAdminAndSubadmin} from '../middlewares/ensureAdmin'

import { DisableUserController } from "../../../../modules/accounts/useCases/disableUser/DisableUserController"
import { DeleteUserController } from "../../../../modules/accounts/useCases/deleteUser/DeleteUserController"

const autheticateRoutes = Router()

const createUserController = new CreateUserController()
const editUserController = new EditUserController()
const updateUserToSubMasterController = new UpdateUserToSubMasterController()


const getOneUserController= new GetOneUserController()

const deleteUserController= new DeleteUserController()
const disableUserController= new DisableUserController()


const getAllUsersController= new GetAllUsersController()

const resetPasswordNoEmailController= new ResetPasswordNoEmailController()

const getOneUserByEmailController= new GetOneUserByEmailController()

const authenticateUserController = new AuthenticateUserController()
const refreshTokenUserController = new RefreshTokenUserController()



autheticateRoutes.post("/create_user",ensureAuthenticated,ensureAdmin,createUserController.handle)

autheticateRoutes.post("/sessions", authenticateUserController.handle)

autheticateRoutes.get("/user/:id",ensureAuthenticated, getOneUserController.handle)

autheticateRoutes.delete("/delete_user/:id",ensureAuthenticated, ensureAdminAndSubadmin,deleteUserController.handle)

autheticateRoutes.patch("/disable_user/:id",ensureAuthenticated, ensureAdminAndSubadmin,disableUserController.handle)


autheticateRoutes.patch("/edit_user/:id",ensureAuthenticated, editUserController.handle)

autheticateRoutes.patch("/update_role_user/:id",ensureAdmin,ensureAuthenticated, updateUserToSubMasterController.handle)

autheticateRoutes.patch("/reset_password/:id",ensureAuthenticated, resetPasswordNoEmailController.handle)
 
autheticateRoutes.get("/users",ensureAuthenticated,ensureAdminAndSubadmin,getAllUsersController.handle)
     
autheticateRoutes.get("/search_user_byemail",ensureAuthenticated,ensureAdminAndSubadmin, getOneUserByEmailController.handle)

autheticateRoutes.post("/refresh_token", refreshTokenUserController.handle)


export {autheticateRoutes}



