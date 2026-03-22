import { FastifyRequest } from 'fastify';
import { NewProduct } from './types.js';

export type GetProductByIdRequest = FastifyRequest<{
  Params: {
    id: string;
  };
}>;

export type AddProductRequest = FastifyRequest<{ Body: NewProduct }>