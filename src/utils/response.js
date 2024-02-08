const successResponse = (data, message) => ({
  success: true,
  message: message || 'Request successful',
  data,
})

const errorResponse = (message, status = 500) => ({
  success: false,
  message: message || 'Internal Server Error',
  status,
})

module.exports = {
  successResponse,
  errorResponse,
}
