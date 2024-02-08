/* eslint-disable no-return-await */
const Book = require('../models/book')

const getAllBooks = async () => await Book.find()

const getBookById = async (id) => await Book.findById(id)

const createBook = async (bookData) => await Book.create(bookData)

const updateBook = async (id, bookData) => {
  const book = await Book.findById(id)

  if (!book) {
    throw new Error('Book not found')
  }

  book.set(bookData)

  return await book.save()
}

const deleteBook = async (id) => {
  const book = await Book.findById(id)

  if (!book) {
    throw new Error('Book not found')
  }

  return await book.deleteOne()
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
}
