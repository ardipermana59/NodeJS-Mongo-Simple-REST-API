/* eslint-disable no-undef */
const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../../app')
const Book = require('../models/book')

// Before running test, connect to database
beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/bookstore-test')
})

// after running test, disconnect database
afterAll(async () => {
  await mongoose.connection.db.dropDatabase()
  await mongoose.connection.close()
})

describe('Book Controller Tests', () => {
  describe('GET /api/v1/books', () => {
    it('should return all books', async () => {
      const response = await request(app).get('/api/v1/books')
      expect(response.status).toBe(200)
      expect(response.body.success).toBe(true)
      expect(response.body.data).toEqual(expect.arrayContaining([]))
    })
  })

  describe('POST /api/v1/books', () => {
    it('should create a new book', async () => {
      const bookData = { title: 'Test Book', author: 'Test Author' }
      const response = await request(app)
        .post('/api/v1/books')
        .send(bookData)
      expect(response.status).toBe(201)
      expect(response.body.success).toBe(true)
      expect(response.body.data).toMatchObject(bookData)
    })
  })

  describe('GET /api/v1/books/:id', () => {
    it('should return a single book', async () => {
      const newBook = await Book.create({ title: 'Test Book', author: 'Test Author' })
      const response = await request(app).get(`/api/v1/books/${newBook._id}`)
      expect(response.status).toBe(200)
      expect(response.body.data.title).toBe(newBook.title)
      expect(response.body.data.author).toBe(newBook.author)
    })
  })

  describe('PUT /api/v1/books/:id', () => {
    it('should update a book', async () => {
      const newBook = await Book.create({ title: 'Test Book', author: 'Test Author' })
      const updatedBookData = { title: 'Updated Book', author: 'Updated Author' }

      const response = await request(app)
        .put(`/api/v1/books/${newBook._id}`)
        .send(updatedBookData)

      expect(response.status).toBe(200)
      expect(response.body.success).toBe(true)
      expect(response.body.data.title).toBe(updatedBookData.title)
      expect(response.body.data.author).toBe(updatedBookData.author)
    })
  })

  describe('DELETE /api/v1/books/:id', () => {
    it('should delete a book', async () => {
      const newBook = await Book.create({ title: 'Test Book', author: 'Test Author' })
      const response = await request(app).delete(`/api/v1/books/${newBook._id}`)

      expect(response.status).toBe(200)
      expect(response.body.success).toBe(true)
      expect(response.body.message).toBe('Book deleted')

      const deletedBook = await Book.findById(newBook._id)
      expect(deletedBook).toBeNull()
    })
  })
})
