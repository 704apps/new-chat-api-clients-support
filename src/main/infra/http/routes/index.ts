import "reflect-metadata"

import {Router} from 'express'

import { chatRouter } from './chat.routes'
import {messageRoutes} from './message.routes'
import { autheticateRoutes } from "./authenticate.routes"
import { noteRouter } from "./note.routes"

const router = Router()


router.use("/chat",messageRoutes,chatRouter,autheticateRoutes,noteRouter)



export {router}