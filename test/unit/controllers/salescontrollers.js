const { expect } = require('chai');
const sinon = require('sinon');

const salesService = require('../../../services/sales');
const salesController = require('../../../controllers/sales');

const { sales } = require('../mocks/sales');

describe('Métodos de "salesController"', () => {
  const req = {};
  const res = {};

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    res.end = sinon.stub().returns();

    sinon.stub(salesService, 'getAll');
  });
  after(() => {
    salesService.getAll.restore();
  });

  describe('getAll', () => {

    before(() => { salesService.getAll.resolves(sales) });
    after(() => {
      salesService.getAll.reset();

      res.status.resetHistory();
      res.json.resetHistory();
    });

    it('responde status 200 com o json das vendas', async () => {
      await salesController.getAll(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(sales)).to.be.true;
    });
  });
});
