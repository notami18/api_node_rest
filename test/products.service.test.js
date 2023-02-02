const request = require('supertest');
const app = require('../index');

const ProductSerrvice = require('./../services/product.service');
const service = new ProductSerrvice();

describe('GET /products', () => {
  test('should respond with a 200 status code', async () => {
    const response = await service.find();
    expect(response).not.toBeNull();
    expect(response).toBeDefined();
  });

  test('should respond with data full', async () => {
    const response = await request(app).get('/api/v1/products').send();
    expect(response.statusCode).toBe(200);
  });
});
