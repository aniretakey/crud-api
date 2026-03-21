import { FastifyRequest } from 'fastify';

export type GetProductByIdRequest = FastifyRequest<{
  Params: {
    id: string;
  };
}>;