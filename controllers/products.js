const productService = require('../services/products');

const getAll = async (_req, res) => {
  const products = await productService.getAll();

  return res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const product = await productService.getById(id);

  if (!product) return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(product);
};

const create = async (req, res) => {
  const { name, quantity } = req.body;

  const product = await productService.create(name, quantity);

  return res.status(201).json(product);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  const product = await productService.update(id, name, quantity);

  return res.status(200).json(product);
};

const exclude = async (req, res) => {
  const { id } = req.params;

  await productService.exclude(id);

  return res.status(204).end();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  exclude,
};
