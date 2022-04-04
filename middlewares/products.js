const Joi = require('joi');
const { getByName } = require('../services/products');

const productSchema = Joi.object({
  name: Joi.string().min(5).required(),
  quantity: Joi.number().integer().min(1).required(),
});

const validateBody = (req, _res, next) => {
  const { name, quantity } = req.body;

  const { error } = productSchema.validate({ name, quantity });

  if (error) return next(error);

  return next();
};

const validateNameAlreadyExists = async (req, res, next) => {
  const { name } = req.body;

  const product = await getByName(name);

  if (product) return res.status(409).json({ message: 'Product already exists' });

  return next();
};

module.exports = {
  validateBody,
  validateNameAlreadyExists,
};
