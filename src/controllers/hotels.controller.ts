import { Request, Response } from 'express'
import { HotelRepository } from '../repositories/hotel.repository'

class HotelsController {
    async hotels(_: Request, res: Response) {
        try {
            const hotels =  await HotelRepository.find()
            return res.json(hotels)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Erro ao ler os dados dos usuários' })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { name, address, city, country, description } = req.body
            const novoHotel = HotelRepository.create({
                name,
                address,
                city,
                country,
                description
            })

            await HotelRepository.save(novoHotel)

            return res.status(201).json(novoHotel)
        } catch (error) {
          console.error(error)
          return res.status(500).json({ error: 'Erro ao criar um novo hotel' })
        }
    }

    async getHotel(req: Request, res: Response) {
        try {
          const { id } = req.params
      
          const hotel = await HotelRepository.findOneBy({ id: +id })
      
          if (!hotel) {
            return res.status(404).json({ message: 'Hotel não encontrado' })
          }
      
          return res.json(hotel)
        } catch (error) {
          console.error(error)
          return res.status(500).json({ error: 'Erro ao buscar o hotel' })
        }
    }

    async excluirHotel (req: Request, res: Response) {
        try {
            const { id } = req.params

            const hotel = await HotelRepository.findOneBy({ id: +id })

                
            if (!hotel) {
                return res.status(404).json({ message: 'Hotel não encontrado' })
            }

            await HotelRepository.delete(hotel)
  
            return res.sendStatus(204)
        } catch (error) {
          console.error(error)
          return res.status(500).json({ error: 'Erro ao excluir o hotel' })
        }
    }
}

export default new HotelsController()
