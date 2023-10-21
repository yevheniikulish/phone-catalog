import { getProducts } from './getProducts';

import { Product } from '../types/Product';

type Function = (
  category: string,
  setProducts: (value: React.SetStateAction<Product[] | null>) => void,
  setIsLoading: (value: React.SetStateAction<boolean>) => void,
) => void;

export const getProductsOfCategory: Function = (category, setProducts, setIsLoading) => {
  setIsLoading(true);

  getProducts()
    .then((products: Product[]) => {
      setProducts(products.filter(
        product => product.category === category,
      ));
    })
    .catch(() => {
      throw new Error('Loading products error');
    })
    .finally(() => setIsLoading(false));
};
