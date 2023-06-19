import { Request, Response, Router } from 'express'
import fse from 'fs-extra'

const hotelsRouter = Router()

const listarHoteis = async (_: Request, res: Response) => {
    try {
        const data = await fse.readFile('hotels.json', 'utf8')
        const hoteis = JSON.parse(data)
        return res.json(hoteis)
      } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Erro ao ler os dados dos hotéis' })
      }
    
}

hotelsRouter.get('/', listarHoteis)

export default hotelsRouter
