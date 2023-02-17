import express from 'express'
import cors from 'cors'
import path from 'path'
import csv from 'csvtojson'

const port = 4000

const app = express()
app.use(cors())

app.get('/influencers', async (_, res, next) => {
  const filePath = path.resolve(__dirname, '../data/influencers.csv')
  try {
    const data = await csv()
      .subscribe(obj => {
        obj.id = obj['Influencer insta name']
      })
      .fromFile(filePath)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

app.get('/', (_, res) => {
  res.json({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
