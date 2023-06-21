import { Express } from 'express'
import hotelsRouter from './hotels.routes'
import usersRouter from './user.routes'

const registerRouters = (app: Express): void => {
    app.get('/', (_, res) => {
        res.send('Hello World!')
    })
    
    app.use('/hotels', hotelsRouter)
    app.use('/users', usersRouter)
}

export default registerRouters
