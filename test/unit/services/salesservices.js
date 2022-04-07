const { expect } = require('chai');
const sinon = require('sinon');

const saleModel = require('../../../models/sales');
const saleService = require('../../../services/sales');

const { sales } = require('../mocks/sales');

describe('Métodos de "salesService"', () => {

  before(() => {
    sinon.stub(saleModel, 'getAll');
  });

  after(() => {
    saleModel.getAll.restore();
  });

  describe('getAll', () => {

    before(() => { saleModel.getAll.resolves(sales) });
    after(() => { saleModel.getAll.reset() });

    it('retorna todas as vendas', async () => {
      const response = await saleService.getAll();

      expect(response).to.be.equal(sales);
    });
  });
});
