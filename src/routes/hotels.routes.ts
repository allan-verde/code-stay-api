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

const criarHotel = async (req: Request, res: Response) => {
  try {
    const { name, address, city, country, description, amenities } = req.body

    const data = await fse.readFile('hotels.json', 'utf8')
    const hoteis = JSON.parse(data)

    const id = hoteis.length + 1

    const novoHotel = {
      id,
      name,
      city,
      address: address || '',
      country: country || '',
      description: description || '',
      amenities: amenities || []
    }

    hoteis.push(novoHotel)

    await fse.writeFile('hotels.json', JSON.stringify(hoteis, null, 2))

    return res.status(201).json(novoHotel)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Erro ao criar um novo hotel' })
  }
}

const mostrarHotel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const data = await fse.readFile('hotels.json', 'utf8')
    const hoteis = JSON.parse(data)

    const hotel = hoteis.find((h: any) => h.id === parseInt(id))

    if (!hotel) {
      return res.status(404).json({ message: 'Hotel não encontrado' })
    }

    return res.json(hotel)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Erro ao buscar o hotel' })
  }
}

const excluirHotel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const data = await fse.readFile('hotels.json', 'utf8')
    const hoteis = JSON.parse(data)

    const hotel = hoteis.find((h: any) => h.id === parseInt(id))

    if (!hotel) {
      return res.status(404).json({ message: 'Hotel não encontrado' })
    }

    const index = hoteis.indexOf(hotel)
    hoteis.splice(index, 1)

    await fse.writeFile('hotels.json', JSON.stringify(hoteis, null, 2))

    return res.sendStatus(204)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Erro ao excluir o hotel' })
  }
}

hotelsRouter.get('/', listarHoteis)
hotelsRouter.post('/', criarHotel)
hotelsRouter.get('/:id', mostrarHotel)
hotelsRouter.delete('/:id', excluirHotel)

export default hotelsRouter
