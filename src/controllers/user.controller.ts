import { Request, Response } from 'express'
import { UserRepository } from '../repositories/user.repository'

class UserController {
    async users(_: Request, res: Response) {
        try {
            const users =  await UserRepository.find()
            return res.json(users)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Erro ao ler os dados dos usuários' })
        }
    }
}

export default new UserController()
