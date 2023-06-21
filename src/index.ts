import 'reflect-metadata'
import express from 'express'
import registerRouters from './routes'
import myDataSource from '../app-data-source'

myDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!')
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err)
    })

const app = express()
const port = 8000

app.use(express.json())

registerRouters(app)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
