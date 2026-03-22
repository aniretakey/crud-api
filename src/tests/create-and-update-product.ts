import t from 'tap';
import { buildTestApp } from './test-helper.ts';

t.test('Create and update product', async (t) => {
  const app = await buildTestApp();
  await app.ready();

  const newProduct = {
    name: 'Test Book',
    description: 'New Book!',
    price: 1234,
    category: 'books',
    inStock: true,
  };

  const createRes = await app.inject({
    method: 'POST',
    url: '/api/products',
    payload: newProduct,
  });

  t.equal(createRes.statusCode, 201);
  const createdProduct = createRes.json();
  t.ok(createdProduct.id);

  const getRes = await app.inject({
    method: 'GET',
    url: `/api/products/${createdProduct.id}`,
  });

  t.equal(getRes.statusCode, 200);
  t.equal(getRes.json().id, createdProduct.id);

  const updatePayload = {
    name: 'Updated Test Book',
    description: 'Updated New Book Description',
    price: 123456,
    category: 'books',
    inStock: false,
  };

  const updateRes = await app.inject({
    method: 'PUT',
    url: `/api/products/${createdProduct.id}`,
    payload: updatePayload,
  });

  t.equal(updateRes.statusCode, 200);
  t.equal(updateRes.json().name, 'Updated Test Book');
  t.equal(updateRes.json().description, 'Updated New Book Description');
  t.equal(updateRes.json().price, 123456);

  const getUpdatedRes = await app.inject({
    method: 'GET',
    url: `/api/products/${createdProduct.id}`,
  });

  t.equal(getUpdatedRes.statusCode, 200);
  t.equal(getUpdatedRes.json().inStock, false);

  await app.close();
});