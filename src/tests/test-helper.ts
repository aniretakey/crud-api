import fastify from 'fastify';
import productsRoutes from '../routes/products.js';
import { products } from '../db/database.js';

export const buildTestApp = async () => {
  products.length = 0;

  const app = fastify({ logger: false });
  app.register(productsRoutes, { prefix: '/api/products' });
  return app;
};