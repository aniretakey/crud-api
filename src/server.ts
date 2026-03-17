import 'dotenv/config';
import Fastify from 'fastify';

const port = Number(process.env.PORT || 4000);

export const startServer = () => {
  console.log(`Server started at ${port}`);

  const fastify = Fastify({ logger: true });

  fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' });
  });

  fastify.listen({ port }, (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  });
};