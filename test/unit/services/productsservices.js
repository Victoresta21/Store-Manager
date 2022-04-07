const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../models/products');
const productsService = require('../../../services/products');

const { products } = require('../mocks/products');

describe('Métodos de "productService"', () => {

  before(() => {
    sinon.stub(productsModel, 'getAll');
  });

  after(() => {
    productsModel.getAll.restore();
  });

  describe('getAll', () => {

    before(() => { productsModel.getAll.resolves(products) });
    after(() => { productsModel.getAll.reset() });

    it('retorna todos os produtos', async () => {
      const response = await productsService.getAll();

      expect(response).to.be.equal(products);
    });
  });
});
