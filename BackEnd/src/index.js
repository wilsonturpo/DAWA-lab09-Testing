/*
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
//  const bodyParser = require('body-parser')
*/

import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'

/*
const errorHandler = require('./utils/middlewares/errorHandlers')
const notFoundHandler = require('./utils/middlewares/notFoundHandler')
*/
import errorHandler from './utils/middlewares/errorHandlers.mjs'
import notFoundHandler from './utils/middlewares/notFoundHandler.mjs'

/*
const { config } = require('./config')
const phoneApi = require('./routes/phoneApi')
*/
import {config} from './config.mjs'
import phoneApi from './routes/phoneApi.mjs'

const app = express()

app.use(morgan('common'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(cors())
//  app.use(bodyParser())

app.use('/', phoneApi)

app.use(notFoundHandler)

app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`listening http://localhost:${config.port}`)
})

export default app