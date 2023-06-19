import { Express } from 'express'
import hotelsRouter from './hotels'

const registerRouters = (app: Express): void => {
    app.get('/', (_, res) => {
        res.send('Hello World!')
    })
    
    app.use('/hotels', hotelsRouter)
}

export default registerRouters
