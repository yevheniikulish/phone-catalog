import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';

import { getProducts } from '../../functions/getProducts';

import { Product } from '../../types/Product';
import { Content } from '../../components/Content';

const title = 'Tablets';

export const TabletsPage = () => {
  const [tablets, setTablets] = useState<Product[] | null>(null);
  const [visibleTablets, setVisibleTablets] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isNoSearchResults, setIsNoSearchResults] = useState(false);
  const [appliedQuery, setAppliedQuery] = useState('');

  const timerId = useRef(0);

  const [searchParams] = useSearchParams();

  const query = searchParams.get('query')?.split('+').join(' ') || '';

  useEffect(() => {
    setIsLoading(true);

    getProducts()
      .then((products: Product[]) => {
        setTablets(products.filter(
          product => product.category === 'tablet',
        ));
      })
      .catch(() => {
        throw new Error('Loading phones error');
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    timerId.current = window.setTimeout(() => {
      setAppliedQuery(query);
    }, 1000);

    return () => clearTimeout(timerId.current);
  }, [query]);

  useEffect(() => {
    const filteredProducts = tablets?.filter(product => (
      product.name.trim().toLowerCase().includes(appliedQuery.toLowerCase())
    ));

    setVisibleTablets(filteredProducts || []);

    setIsNoSearchResults(!filteredProducts?.length && !!tablets?.length);
  }, [appliedQuery, tablets]);

  return (
    <Content
      isNoSearchResults={isNoSearchResults}
      products={visibleTablets}
      isLoading={isLoading}
      title={title}
    />
  );
};
