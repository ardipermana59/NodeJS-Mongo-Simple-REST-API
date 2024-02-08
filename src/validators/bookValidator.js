const { body, param, validationResult } = require('express-validator')

function validateRequest(validations) {
  return [
    ...validations,
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: 'Bad Request',
          success: false,
          errors: errors.array(),
        })
      }

      return next()
    },
  ]
}

const createBookValidator = validateRequest([
  body('title').notEmpty().withMessage('Title is required'),
  body('author').notEmpty().withMessage('Author is required'),
])

const updateBookValidator = validateRequest([
  param('id').notEmpty().withMessage('Book ID is required'),
  body('title').notEmpty().withMessage('Title is required'),
  body('author').notEmpty().withMessage('Author is required'),
])

const deleteBookValidator = validateRequest([
  param('id').notEmpty().withMessage('Book ID is required'),
])

module.exports = {
  createBookValidator,
  updateBookValidator,
  deleteBookValidator,
}
