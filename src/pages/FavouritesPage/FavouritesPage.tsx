import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';

import { BackButton } from '../../components/BackButton';
import { ProductCard } from '../../components/ProductCard';
import { NoSearchResults } from '../../components/NoSearchResults';

import { Product } from '../../types/Product';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { actions as favouritesActions } from '../../store/favouritesReducer';
import { actions as cartActions } from '../../store/cartReducer';
import { filterProducts } from '../../functions/filterProducts';

const title = 'Favourites';

export const FavouritesPage = () => {
  const [
    visibleFavourites,
    setVisibleFavourites,
  ] = useState<Product[] | null>(null);
  const [appliedQuery, setAppliedQuery] = useState('');
  const [isNoSearchResults, setIsNoSearchResults] = useState(false);

  const dispatch = useAppDispatch();
  const favourites = useAppSelector(state => state.favourites);

  const timerId = useRef(0);

  const [searchParams] = useSearchParams();

  const query = searchParams.get('query')?.split('+').join(' ') || '';

  useEffect(() => {
    dispatch(cartActions.set());
    dispatch(favouritesActions.set());
  }, []);

  useEffect(() => {
    timerId.current = window.setTimeout(() => {
      setAppliedQuery(query);
    }, 1000);

    return () => clearTimeout(timerId.current);
  }, [query]);

  useEffect(() => {
    filterProducts(favourites, appliedQuery, setVisibleFavourites, setIsNoSearchResults);
  }, [appliedQuery, favourites]);

  return (
    <div className="favourites page__cart">
      <BackButton />

      <h1 className="favourites__title">
        {title}
      </h1>

      <p className="favourites__count">
        {`${visibleFavourites?.length} item${visibleFavourites?.length === 1 ? '' : 's'}`}
      </p>

      <div className="favourites__container">
        {!favourites.length && (
          <div className="no-results">
            Favourites not found
          </div>
        )}

        {isNoSearchResults ? (
          <NoSearchResults title={title} />
        ) : (
          <div className="favourites__products">
            {visibleFavourites?.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
