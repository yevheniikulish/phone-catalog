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

const title = 'Accessories';

export const AccessoriesPage = () => {
  const [accessories, setAccessories] = useState<Product[] | null>(null);
  const [
    visibleAccessories,
    setVisibleAccessories,
  ] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isNoSearchResults, setIsNoSearchResults] = useState(false);
  const [appliedQuery, setAppliedQuery] = useState('');

  const timerId = useRef(0);

  const [searchParams] = useSearchParams();

  const query = searchParams.get('query')?.split('+').join(' ') || '';

  useEffect(() => {
    getProductsOfCategory('accessories', setAccessories, setIsLoading);
  }, []);

  useEffect(() => {
    timerId.current = window.setTimeout(() => {
      setAppliedQuery(query);
    }, 1000);

    return () => clearTimeout(timerId.current);
  }, [query]);

  useEffect(() => {
    filterProducts(accessories, appliedQuery, setVisibleAccessories, setIsNoSearchResults);
  }, [appliedQuery, accessories]);

  return (
    <Content
      isNoSearchResults={isNoSearchResults}
      products={visibleAccessories}
      isLoading={isLoading}
      title={title}
    />
  );
};
