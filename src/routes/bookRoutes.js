const express = require('express')

const router = express.Router()
const { createBookValidator, updateBookValidator, deleteBookValidator } = require('../validators/bookValidator')
const bookController = require('../controllers/bookController')

router.get('/', bookController.getAllBooks)
router.get('/:id', bookController.getBookById)
router.post('/', createBookValidator, bookController.createBook)
router.put('/:id', updateBookValidator, bookController.updateBook)
router.delete('/:id', deleteBookValidator, bookController.deleteBook)

module.exports = router
