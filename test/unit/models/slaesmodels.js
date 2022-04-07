const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const salesModel = require('../../../models/sales');

const {
  dbSales,
  sales,
} = require('../mocks/sales');

describe('Métodos de "salesModel"', () => {

  before(() => { sinon.stub(connection, 'execute') });
  after(() => { connection.execute.restore() });

  describe('getAll', () => {

    before(() => { connection.execute.resolves(dbSales) });
    after(() => { connection.execute.reset() });

    it('retorna todas as vendas do banco de dados', async () => {
      const response = await salesModel.getAll();

      expect(connection.execute.calledOnce).to.be.true;
      expect(response).to.be.deep.equal(sales);
    });
  });
});
