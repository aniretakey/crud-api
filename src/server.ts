import 'dotenv/config';
import Fastify from 'fastify';
import productsRoutes from './routes/products.ts';

const port = Number(process.env.PORT || 4000);

export const startServer = () => {
  console.log(`Server started at ${port}`);

  const fastify = Fastify({ logger: true });

  fastify.setErrorHandler((error, request, reply) => {
    fastify.log.error(error);

    reply.status(500).send({
      statusCode: 500,
      error: 'Internal Server Error',
      message: 'Oops, something went wrong. Σ(°△°|||)︴ Even we don’t know what happened, but we’re looking into it ┐(‘～` )┌',
      timestamp: new Date().toISOString(),
    });
  });

  fastify.register(productsRoutes, { prefix: '/api/products' });

  fastify.get('/error', async () => {
    throw new Error('Test error');
  });

  fastify.listen({ port }, (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
};