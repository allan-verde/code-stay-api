import { Router } from 'express'
import userController from '../controllers/user.controller'

const usersRouter = Router()

usersRouter.get('/', userController.users)

export default usersRouter
