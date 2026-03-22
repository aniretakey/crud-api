import t from 'tap';
import { buildTestApp } from './test-helper.ts';

t.test('send request to unknown adress', async () => {
  const app = await buildTestApp();
  await app.ready();

  const res = await app.inject({
    method: 'GET',
    url: `/api/${Date.now()}`,
  });

  t.equal(res.statusCode, 404);

  await app.close();
});