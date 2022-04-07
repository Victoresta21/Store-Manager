const { expect } = require('chai');
const sinon = require('sinon');

const productsService = require('../../../services/products');
const productsController = require('../../../controllers/products');

const { products } = require('../mocks/products');

describe('Métodos de "productsController"', () => {
  const req = {};
  const res = {};

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    res.end = sinon.stub().returns();

    sinon.stub(productsService, 'getAll');
  });
  after(() => {
    productsService.getAll.restore();
  });

  describe('getAll', () => {

    before(() => { productsService.getAll.resolves(products) });
    after(() => {
      productsService.getAll.reset();

      res.status.resetHistory();
      res.json.resetHistory();
    });

    it('responde status 200 com o json dos produtos', async () => {
      await productsController.getAll(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(products)).to.be.true;
    });
  });
});
