const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors(options));

// app.get('/', (req, res) => {
//   res.send('Hola mi server en express');
// });

// app.get('/nueva-ruta', (req, res) => {
//   res.send('Hola soy una nueva ruta');
// });

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.listen(port, () => {
//   console.log(`my port ${port}`);
// });

module.exports = app.listen(port);
