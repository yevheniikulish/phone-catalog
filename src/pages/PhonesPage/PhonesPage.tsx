import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';

import { getProducts } from '../../functions/getProducts';

import { Product } from '../../types/Product';

import { Content } from '../../components/Content';

const title = 'Mobile phones';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Product[] | null>(null);
  const [visiblePhones, setVisiblePhones] = useState<Product[] | null>(null);
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
        setPhones(products.filter(
          product => product.category === 'phones',
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
    const filteredProducts = phones?.filter(product => (
      product.name.trim().toLowerCase().includes(appliedQuery.toLowerCase())
    ));

    setVisiblePhones(filteredProducts || []);

    setIsNoSearchResults(!filteredProducts?.length && !!phones?.length);
  }, [appliedQuery, phones]);

  return (
    <Content
      isNoSearchResults={isNoSearchResults}
      products={visiblePhones}
      isLoading={isLoading}
      title={title}
    />
  );
};
