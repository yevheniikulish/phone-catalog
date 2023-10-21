import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Product } from '../../types/Product';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { actions as cartActions } from '../../store/cartReducer';
import { actions as favouritesActions } from '../../store/favouritesReducer';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart);
  const favourites = useAppSelector(state => state.favourites);

  const {
    image,
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
    phoneId,
  } = product;

  useEffect(() => {
    dispatch(cartActions.set());
    dispatch(favouritesActions.set());
  }, []);

  return (
    <div
      className="product-card"
      data-cy="cardsContainer"
    >
      <Link
        to={`/phones/${phoneId}`}
        className="product-card__container"
      >
        <img
          src={`./${image}`}
          alt={name}
          className="product-card__image"
        />

        <p className="product-card__name">
          {name}
        </p>
      </Link>

      <div className="product-card__container">
        <p className="product-card__price">
          {`$${Math.round(price / 10) * 10 - 1}`}

          {price !== fullPrice && (
            <>
              {' '}

              <span className="product-card__full-price">
                {`$${Math.round(fullPrice / 10) * 10 - 1}`}
              </span>
            </>
          )}
        </p>

        <div className="product-card__line" />

        <div className="product-card__text-box">
          <p className="product-card__param-name">
            Screen
          </p>

          <p className="product-card__param-value">
            {screen}
          </p>
        </div>

        <div className="product-card__text-box">
          <p className="product-card__param-name">
            Capacity
          </p>

          <p className="product-card__param-value">
            {capacity}
          </p>
        </div>

        <div className="product-card__text-box">
          <p className="product-card__param-name">
            RAM
          </p>

          <p className="product-card__param-value">
            {ram}
          </p>
        </div>

        <div className="product-card__interaction-block">
          {cart.some(c => c.id === product.id) ? (
            <button
              className={classNames(
                'product-card__cart-button',
                'product-card__cart-button--added',
              )}
              type="button"
              onClick={() => dispatch(cartActions.take({ product, id: product.id, quantity: 1 }))}
            >
              Added to cart
            </button>
          ) : (
            <button
              className="product-card__cart-button"
              type="button"
              onClick={() => dispatch(cartActions.add({ product, id: product.id, quantity: 1 }))}
            >
              Add to cart
            </button>
          )}

          <button
            type="button"
            className="product-card__favourites-button"
            onClick={() => (favourites.some(favourite => favourite.id === product.id)
              ? dispatch(favouritesActions.take(product))
              : dispatch(favouritesActions.add(product)))}
          >
            <div
              className={classNames(
                'product-card__favourites-icon',
                {
                  'product-card__favourites-icon--added': (
                    favourites.some(favourite => favourite.id === product.id)
                  ),
                },
              )}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
