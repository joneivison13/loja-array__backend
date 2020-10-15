import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express();

import routes from './routes'

app.use(cors())
app.use('/temp',express.static('temp'));
app.use(express.json())
app.use(morgan('dev'))
app.use(routes)
app.listen(3333 ,() => {
  console.log('servidor rodando')
})