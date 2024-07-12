import "reflect-metadata"

import {Router} from 'express'

import { chatRouter } from './chat.routes'
import {messageRoutes} from './message.routes'

const router = Router()


router.use("/chat",messageRoutes,chatRouter)






export {router}