const express = require('express');
const bodyParser = require('body-parser');
const sales = require('./router/salesroute');
const products = require('./router/productsroute');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/sales', sales);
app.use('/products', products);

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
