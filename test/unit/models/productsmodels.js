const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const productsModel = require('../../../models/products');

const {
  dbProducts,
  products,
} = require('../mocks/products');

describe('Métodos de "productsModel"', () => {

  before(() => { sinon.stub(connection, 'execute') });
  after(() => { connection.execute.restore() });

  describe('getAll', () => {

    before(() => { connection.execute.resolves(dbProducts) });
    after(() => { connection.execute.reset() });

    it('retorna todos os produtos do banco de dados', async () => {
      const response = await productsModel.getAll();

      expect(connection.execute.calledOnce).to.be.true;
      expect(response).to.be.deep.equal(products);
    });
  });
});
