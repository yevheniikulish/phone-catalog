import { request } from './getProducts';

export const getProductInfo = (productId: string) => {
  return request(`_new/products/${productId}.json`);
};
