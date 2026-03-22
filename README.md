# crud-api

## Clone & install

```
git clone https://github.com/aniretakey/crud-api.git
cd crud-api
npm install
```

## Copy env (or create your own .env file with)

```
cp .env.example .env
```

## Set your port for app

```
PORT=3000
```

If you don't create .env, app will be start at port 4000

## Start app

#### Dev mode

```
npm run start:dev
```

#### Prod mode

```
npm run start:prod
```

## Endpoints

All endpoints: http://localhost:PORT/api/products

- `GET /api/products` - get all products
- `GET /api/products/:id` - get product by UUID
- `POST /api/products` - create product
- `PUT /api/products/:id` - update product
- `DELETE /api/products/:id` - delete product

## Tests

```
npm test // Run single test
npx tsx src/tests/get-products.test.ts // Run all tests
```

## Packages used

- Fastify (framework for Node.js)
- TypeScript
- ESBuild (bundler)
- tsx (dev server)
- tap (tests)
- ESLint + Prettier (code quality)