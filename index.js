const express = require('express');
const bodyParser = require('body-parser');
const sales = require('./router/salesroute');
const products = require('./router/productroute');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/sales', sales);
app.use('/products', products);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
