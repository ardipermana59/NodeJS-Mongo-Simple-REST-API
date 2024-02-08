const express = require('express')
const mongoose = require('mongoose')
const app = require('./app')

const server = express()
server.use(app)
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('Connected to MongoDB')
})

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on http://localhost:${port}`)
})
