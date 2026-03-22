import { FastifyInstance } from 'fastify';
import { addProduct, deleteProduct, findAllProducts, findProductById, isProductExists } from '../utils/utils.ts';
import { AddProductRequest, GetProductByIdRequest } from '../types/request.types.ts';
import { isValidUuid } from '../utils/helpers.ts';

async function productsRoutes(fastify: FastifyInstance) {
  fastify.get('/', async (_, reply) => {
    const products = await findAllProducts();

    return reply.code(200).send(products);
  });

  fastify.get('/:id', async (request: GetProductByIdRequest, reply) => {
    const idFromReq = request.params.id;

    if (!isValidUuid(idFromReq)) {
      return reply.code(400).send(`Product id ${idFromReq} is not valid uuid`);
    }

    const product = await findProductById(idFromReq);

    if (!product) {
      return reply.code(404).send(`Product with id ${idFromReq} not found`);
    }

    return reply.code(200).send(product);
  });

  fastify.post('/', async (request: AddProductRequest, reply) => {
    const newProduct = addProduct(request.body);

    //TODO: add validation
    return reply.code(201).send(newProduct);
  });

  fastify.delete('/:id', async (request: GetProductByIdRequest, reply) => {
    const idFromReq = request.params.id;

    if (!isValidUuid(idFromReq)) {
      return reply.code(400).send(`Product id ${idFromReq} is not valid uuid`);
    }

    if (!isProductExists(idFromReq)) {
      return reply.code(404).send(`Product with id ${idFromReq} doesn't exist`);
    }

    await deleteProduct(idFromReq);

    return reply.code(204).send('Product successfully deleted');
  });
}

export default productsRoutes;