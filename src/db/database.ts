import { Product } from '../types/types.ts';

export const products: Product[] = [
  {
    id: '8bd924b4-cd52-47a1-bf3a-d484e4817231',
    name: '1984 - George Orwell',
    description: 'Essential dystopian and allegorical fiction',
    category: 'books',
    price: 100500,
    inStock: true,
  },
  {
    id: '4d84713b-9f73-451f-ba37-9af847f8d9a5',
    name: 'Pride and Prejudice - Jane Austen',
    description: 'A quintessential, witty romance regarding social standing',
    category: 'books',
    price: 200,
    inStock: true,
  },
  {
    id: '5b7bdc98-3265-42bf-b49c-8e27b9d9cf33',
    name: 'To Kill a Mockingbird -  Harper Lee',
    description: 'A profound story of justice and childhood',
    category: 'books',
    price: 1326,
    inStock: true,
  },
  {
    id: 'd70c885f-8f86-42c3-a2f7-35f48fdaca1e',
    name: 'Harry Potter and the Philosopher\'s Stone - J.K. Rowling',
    description: 'Happiness can be found, even in the darkest of times, if one only remembers to turn on the light',
    category: 'books',
    price: 888,
    inStock: false,
  },
  {
    id: 'a1d39e5a-2b94-4df8-9d08-c024e06f1b8b',
    name: 'The Great Gatsby - F. Scott Fitzgerald',
    description: 'So we beat on, boats against the current, borne back ceaselessly into the past.',
    category: 'books',
    price: 99.9,
    inStock: true,
  },
];