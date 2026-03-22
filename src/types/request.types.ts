import { FastifyRequest } from 'fastify';
import { NewProduct } from './types.ts';

export type GetProductByIdRequest = FastifyRequest<{
  Params: {
    id: string;
  };
}>;

export type AddProductRequest = FastifyRequest<{ Body: NewProduct }>