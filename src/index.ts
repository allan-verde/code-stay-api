import express from 'express'
import registerRouters from './routes'

const app = express()
const port = 8000

app.use(express.json())

registerRouters(app)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
