//  const createError = require('http-errors')
import createError from 'http-errors'

export default (_, __, next) => {
  next(createError(404))
}
