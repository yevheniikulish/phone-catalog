import { getProducts } from './getProducts';

import { Product } from '../types/Product';

export const getHotPriceProducts = () => {
  return getProducts()
    .then((products: Product[]) => products
      .sort((product1, product2) => (
        product2.fullPrice - product1.fullPrice
          + product1.price - product2.price
      ))
      .slice(0, 12));
};
