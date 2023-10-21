import { getProducts } from './getProducts';

import { Product } from '../types/Product';

export const getBrandNewProducts = () => {
  return getProducts()
    .then((products: Product[]) => products
      .filter(product => product.year === 2019)
      .sort((product1, product2) => (
        product2.fullPrice - product1.fullPrice
      ))
      .slice(0, 12));
};
