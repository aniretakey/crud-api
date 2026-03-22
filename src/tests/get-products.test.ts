import t from 'tap';
import { buildTestApp } from './test-helper.ts';

t.test('GET all products', async (t) => {
  const app = await buildTestApp();
  await app.ready();

  const res = await app.inject({
    method: 'GET',
    url: '/api/products',
  });

  t.equal(res.statusCode, 200);
  t.same(res.json(), []);

  await app.close();
});