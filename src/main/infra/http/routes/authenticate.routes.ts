import {Router} from "express"


import { AuthenticateUserController } from "../../../../modules/accounts/useCases/authenticateUser/AutenticateUserController"
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController"
import { RefreshTokenUserController } from "../../../../modules/accounts/useCases/refreshTokenUser/RefreshTokenUserController"
import { GetOneUserController } from "../../../../modules/accounts/useCases/getOneUser/GetOneUserController"
import { GetOneUserByEmailController } from "../../../../modules/accounts/useCases/getOneUserByEmail/GetOneUserByEmailController"
import { GetAllUsersController } from "../../../../modules/accounts/useCases/getAllUsers/GetAllUsersController"
import { ResetPasswordNoEmailController } from "../../../../modules/accounts/useCases/resetPasswordNoEmail/ResetPasswordNoEmailController"

import {ensureAuthenticated} from '../middlewares/ensureAuthenticated'

const autheticateRoutes = Router()

const createUserController = new CreateUserController()
const getOneUserController= new GetOneUserController()
const getAllUsersController= new GetAllUsersController()

const resetPasswordNoEmailController= new ResetPasswordNoEmailController()

const getOneUserByEmailController= new GetOneUserByEmailController()

const authenticateUserController = new AuthenticateUserController()
const refreshTokenUserController = new RefreshTokenUserController()



autheticateRoutes.post("/create_user", createUserController.handle)

autheticateRoutes.post("/sessions", authenticateUserController.handle)

autheticateRoutes.get("/user/:id",ensureAuthenticated, getOneUserController.handle)

autheticateRoutes.post("/reset_password/:id", resetPasswordNoEmailController.handle)

autheticateRoutes.post("/reset_password/:id", resetPasswordNoEmailController.handle)


autheticateRoutes.get("/users", getAllUsersController.handle)

autheticateRoutes.get("/search_user_byemail", getOneUserByEmailController.handle)

autheticateRoutes.post("/refresh_token", refreshTokenUserController.handle)


export {autheticateRoutes}



