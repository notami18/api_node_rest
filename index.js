const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
});

app.get('/products', (req, res) => {
  res.json([
    { name: 'product 1', price: 1000 },
    { name: 'product 2', price: 2000 },
    { name: 'product 3', price: 3000 },
  ]);
});

app.get('/product/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'product 2', price: 2000 });
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
