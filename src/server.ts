import express from 'express'
import cors from 'cors'
import { router } from './routes/index.routes'
import { dbConnect } from './data-base/index.data-base'
import { errorHandler, notFoundHandler } from './error-handling/middleware/handle-errors'

dbConnect()

const app = express()

app.use(cors())
app.use(express.json())
app.get('/', (_req, res) => {
  res.send('Welcome to the Kanban Board API =D')
})
app.use('/api', router)
app.use(errorHandler)
app.use(notFoundHandler)

const ENV_PORT = process.env.PORT as any

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const port = ENV_PORT || 3001
app.listen(port, () => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`Server up and running listening on port ${port}`)
})
