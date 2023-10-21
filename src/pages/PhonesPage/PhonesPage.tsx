import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';

import { Content } from '../../components/Content';

import { Product } from '../../types/Product';

import { getProductsOfCategory } from '../../functions/getProductsOfCategory';
import { filterProducts } from '../../functions/filterProducts';

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
    getProductsOfCategory('phones', setPhones, setIsLoading);
  }, []);

  useEffect(() => {
    timerId.current = window.setTimeout(() => {
      setAppliedQuery(query);
    }, 1000);

    return () => clearTimeout(timerId.current);
  }, [query]);

  useEffect(() => {
    filterProducts(phones, appliedQuery, setVisiblePhones, setIsNoSearchResults);
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
