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
    getProductsOfCategory('tablets', setTablets, setIsLoading);
  }, []);

  useEffect(() => {
    timerId.current = window.setTimeout(() => {
      setAppliedQuery(query);
    }, 1000);

    return () => clearTimeout(timerId.current);
  }, [query]);

  useEffect(() => {
    filterProducts(tablets, appliedQuery, setVisibleTablets, setIsNoSearchResults);
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
