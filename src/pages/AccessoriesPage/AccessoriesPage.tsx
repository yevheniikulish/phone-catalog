import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';

import { getPhones } from '../../functions/getPhones';

import { Phone } from '../../types/Phone';
import { Content } from '../../components/Content';

const title = 'Accessories';

export const AccessoriesPage = () => {
  const [accessories, setAccessories] = useState<Phone[] | null>(null);
  const [
    visibleAccessories,
    setVisibleAccessories,
  ] = useState<Phone[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isNoSearchResults, setIsNoSearchResults] = useState(false);
  const [appliedQuery, setAppliedQuery] = useState('');

  const timerId = useRef(0);

  const [searchParams] = useSearchParams();

  const query = searchParams.get('query')?.split('+').join(' ') || '';

  useEffect(() => {
    setIsLoading(true);

    getPhones()
      .then((products: Phone[]) => {
        setAccessories(products.filter(
          product => product.category === 'accessories',
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
    const filteredProducts = accessories?.filter(product => (
      product.name.trim().toLowerCase().includes(appliedQuery.toLowerCase())
    ));

    setVisibleAccessories(filteredProducts || []);

    setIsNoSearchResults(!filteredProducts?.length && !!accessories?.length);
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