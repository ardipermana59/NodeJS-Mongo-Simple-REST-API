const bookService = require('../services/bookService')
const { errorResponse, successResponse } = require('../utils/response')

const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks()

    return res.json(successResponse(books))
  } catch (err) {
    return res.status(500).json(errorResponse(err.message))
  }
}

const getBookById = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id)

    if (!book) {
      return res.status(404).json(errorResponse('Book not found', 404))
    }

    return res.json(successResponse(book))
  } catch (err) {
    return res.status(500).json(errorResponse(err.message))
  }
}

const createBook = async (req, res) => {
  try {
    const newBook = await bookService.createBook(req.body)

    return res.status(201).json(successResponse(newBook))
  } catch (err) {
    return res.status(500).json(errorResponse(err.message))
  }
}

const updateBook = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id)

    if (!book) {
      return res.status(404).json(errorResponse('Book not found', 404))
    }

    const updatedBook = await bookService.updateBook(req.params.id, req.body)

    return res.json(successResponse(updatedBook))
  } catch (err) {
    return res.status(500).json(errorResponse(err.message))
  }
}

const deleteBook = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id)

    if (!book) {
      return res.status(404).json(errorResponse('Book not found', 404))
    }

    await bookService.deleteBook(req.params.id)

    return res.json(successResponse(null, 'Book deleted'))
  } catch (err) {
    return res.status(500).json(errorResponse(err.message))
  }
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
}
