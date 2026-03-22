import { FastifyInstance } from 'fastify';
import { addProduct, findAllProducts, findProductById } from '../utils/utils.js';
import { GetProductByIdRequest } from '../types/request.types.js';
import { isValidUuid } from '../utils/helpers.js';

async function productsRoutes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    const products = await findAllProducts();

    return reply.code(200).send(products);
  });

  fastify.get('/:id', async (request: GetProductByIdRequest, reply) => {
    const idFromReq = request.params.id;

    if (!isValidUuid(idFromReq)) {
      return reply.code(400).send('Product id is not valid uuid');
    }

    const product = await findProductById(idFromReq);

    if (!product) {
      return reply.code(404).send(`Product with id ${idFromReq} not found`);
    }

    return reply.code(200).send(product);
  });

  fastify.post('/', async (request, reply) => {
    const newProduct = addProduct(request.body);
  });
}

export default productsRoutes;