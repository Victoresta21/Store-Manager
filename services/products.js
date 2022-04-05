const productModel = require('../models/products');

const getAll = async () => {
  const products = await productModel.getAll();

  return products;
};

const getById = async (id) => {
  const product = await productModel.getById(id);

  return product;
};

const getByName = async (name) => {
  const product = await productModel.getByName(name);

  return product;
};

const create = async (name, quantity) => {
  const product = await productModel.create(name, quantity);

  return product;
};

const update = async (id, name, quantity) => {
  const product = await productModel.update(id, name, quantity);

  return product;
};

const exclude = async (id) => {
  await productModel.exclude(id);
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  update,
  exclude,
};
