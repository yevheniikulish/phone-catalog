import { getProducts } from './getProducts';

import { Product } from '../types/Product';

const returnRandomList = (products: Product[]) => {
  const resultRandomList: Product[] = [];

  const max = products.length;

  const getRandomProduct = () => (
    Math.floor(Math.random() * max)
  );

  for (let i = 0; i < 10 && i < max; i += 1) {
    let randomProduct = products[getRandomProduct()];

    while (resultRandomList.includes(randomProduct)) {
      randomProduct = products[getRandomProduct()];
    }

    resultRandomList.push(randomProduct);
  }

  return resultRandomList;
};

export const getSuggestedProducts = () => {
  return getProducts()
    .then(returnRandomList);
};
