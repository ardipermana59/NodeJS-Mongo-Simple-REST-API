const express = require('express')

const router = express.Router()
const bookRoutes = require('./bookRoutes')

router.use('/api/v1/books', bookRoutes)

router.use((req, res) => {
  res.json({
    message: 'Everythink is ok',
    success: true,
  })
})

router.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
    success: false,
  })
})

module.exports = router
