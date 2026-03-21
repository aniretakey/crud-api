import { FastifyInstance } from 'fastify';
import { findAllProducts, findProductById } from '../utils/utils.js';
import { GetProductByIdRequest } from '../types/request.types.js';

async function productsRoutes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    const products = await findAllProducts();

    return reply.code(200).send(products);
  });

  fastify.get('/:id', async (request: GetProductByIdRequest, reply) => {
    const product = await findProductById(request.params.id);

    // TODO: добавить обработку с 400 и 404 

    return reply.code(200).send(product);
  });
}

export default productsRoutes;