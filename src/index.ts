import express, { Request, Response } from 'express'
import dontenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import { initMongoDB } from './db'

dontenv.config()

const app = express()

initMongoDB()

app.use( cors() )
app.use( helmet() )

app.get('./', ( req: Request, res: Response ) => {
  console.log(req.originalUrl)

  res.send('hello World')
})

const port = process.env.PORT || 3000

console.log(process.env.PORT)

app.listen( port, () => {
  console.log(`Listening on port ${port}`)
})