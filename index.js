const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

// TODO: Los endpoints especificos deben declararsen antes de los endpoints dinamicos. Uno de los mandamientos.
app.get('/products/filter', (req, res) => {
  res.send(`Yo soy un filter`);
});

app.get('/product/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'product 2', price: 2000 });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send('No hay parametros');
  }
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

// TODO: Reto
app.get('/categories/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json({
    categoryId,
    category: 'Computers & Accesories',
  });
});

app.get('/people', (req, res) => {
  res.json([
    {
      name: 'Arturo',
      type: 'employee',
    },
    {
      name: 'Jimena',
      type: 'customer',
    },
  ]);
});

app.get('/people/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Arturo',
    type: 'employee',
  });
});

app.listen(port, () => {
  console.log(`my port ${port}`);
});
