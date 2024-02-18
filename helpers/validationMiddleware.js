// validationMiddleware.js
const createError = require('http-errors');
const { authSchema } = require('./ValidationSchema');

const validateAuthSchema = (req, res, next) => {
  const result = authSchema.safeParse(req.body);
  if (!result.success) {
    return next(createError.BadRequest('Validation failed', { details: result.error }));
  }
  next();
};

module.exports = { validateAuthSchema };
