import { randomUUID } from 'crypto';
import { products } from '../db/products.js';
import { NewProduct, Product } from '../types/types.js';

export const findAllProducts = async () => {
  return products;
};

export const findProductById = async (id: string) => {
  return products.find(el => el.id === id);
};

export const addProduct = async (product: NewProduct) => {
  const id = randomUUID();

  const newProduct = {
    id: id,
    ...product,
  };

  products.push(newProduct);

  return newProduct;
};

export const deleteProduct = async (id: string) => {
  const index = products.findIndex(el => el.id === id);

  if (index === -1) {
    return false;
  }
  products.splice(index, 1);

  return true;
};

export const updateProduct = async (product: Product) => {
  const index = products.findIndex(p => p.id === product.id);

  if (index === -1) {
    return null;
  }

  const updatedProduct: Product = {
    ...products[index],
    ...product,
  };

  products[index] = updatedProduct;

  return updatedProduct;
};