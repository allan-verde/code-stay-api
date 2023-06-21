import { Router } from 'express'
import hotelsController from '../controllers/hotels.controller'

const hotelsRouter = Router()

hotelsRouter.get('/', hotelsController.hotels)
hotelsRouter.post('/', hotelsController.create)
hotelsRouter.get('/:id', hotelsController.getHotel)
hotelsRouter.delete('/:id', hotelsController.excluirHotel)

export default hotelsRouter
