import { Product } from '../types/Product';

type Function = (
  products: Product[] | null,
  appliedQuery: string,
  setVisibleProducts: (value: React.SetStateAction<Product[] | null>) => void,
  setIsNoSearchResults: (value: React.SetStateAction<boolean>) => void,
) => void;

export const filterProducts: Function = (
  products,
  appliedQuery,
  setVisibleProducts,
  setIsNoSearchResults,
) => {
  const filteredProducts = products?.filter(product => (
    product.name.trim().toLowerCase().includes(appliedQuery.toLowerCase())
  ));

  setVisibleProducts(filteredProducts || []);

  setIsNoSearchResults(!filteredProducts?.length && !!products?.length);
};
