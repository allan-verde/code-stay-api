import { Request, Response, Router } from 'express'
import UserController from '../controllers/user.controller'

const usersRouter = Router()

const listarUsuarios = async (req: Request, res: Response) => {
    const users = await UserController.users(req, res)
    return users
}

usersRouter.get('/', listarUsuarios)

export default usersRouter
