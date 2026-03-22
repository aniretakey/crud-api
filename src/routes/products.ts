import { FastifyInstance } from 'fastify';
import {
  addProduct,
  deleteProduct,
  findAllProducts,
  findProductById,
  isProductExists,
  updateProduct,
} from '../utils/utils.ts';
import { AddProductRequest, GetProductByIdRequest, UpdateProductRequest } from '../types/request.types.ts';
import { isValidUuid, validateProductFields } from '../utils/helpers.ts';

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
    const newProductFromParams = request.body;

    const { isValid, errorType } = validateProductFields(newProductFromParams);

    if (!isValid) {
      const errorMessage = errorType === 'INVALID_PRICE'
        ? 'Price is not a positive number' :
        `New product doesn't contain required fields`;

      return reply.code(400).send(errorMessage);
    }

    const newProduct = await addProduct(newProductFromParams);

    return reply.code(201).send(newProduct);
  });

  fastify.put('/:id', async (request: UpdateProductRequest, reply) => {
    const idFromReq = request.params.id;

    if (!isValidUuid(idFromReq)) {
      return reply.code(400).send(`Product id ${idFromReq} is not valid uuid`);
    }

    const product = await findProductById(idFromReq);

    if (!product) {
      return reply.code(404).send(`Product with id ${idFromReq} not found`);
    }

    const newProductFromParams = request.body;
    const updatedProduct = await updateProduct(newProductFromParams, idFromReq);

    return reply.code(200).send(`Product with id ${request.params.id} successfully updated: ${JSON.stringify(updatedProduct)}`);
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