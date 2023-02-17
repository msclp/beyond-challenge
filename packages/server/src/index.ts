import express from 'express'
import cors from 'cors'

const port = 4000

const app = express()
app.use(cors())

app.get('/', (_, res) => {
  res.json({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
