import { NewProduct } from '../types/types.ts';

export const isValidUuid = (value: string) => {
  try {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(value);
  } catch {
    return false;
  }
};

export const NEW_PRODUCT_ERRORS = {
  INVALID_PRICE: 'INVALID_PRICE',
  EMPTY_FIELDS: 'EMPTY_FIELDS',
} as const;

export const validateProductFields = (
  product: NewProduct,
): {
  isValid: boolean;
  errorType?: keyof typeof NEW_PRODUCT_ERRORS;
} => {
  const { name, inStock, description, price, category } = product;

  if (
    !name?.trim() ||
    !description?.trim() ||
    !category?.trim()
  ) {
    return {
      isValid: false,
      errorType: 'EMPTY_FIELDS',
    };
  }

  if (typeof inStock !== 'boolean') {
    return {
      isValid: false,
      errorType: 'EMPTY_FIELDS',
    };
  }

  if (typeof price !== 'number' || price <= 0) {
    return {
      isValid: false,
      errorType: 'INVALID_PRICE',
    };
  }

  return { isValid: true };
};