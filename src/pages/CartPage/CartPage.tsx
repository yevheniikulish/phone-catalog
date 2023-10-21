import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import classNames from 'classnames';

import { BackButton } from '../../components/BackButton';

import { CartType } from '../../types/CartType';
import { Product } from '../../types/Product';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { actions as cartActions } from '../../store/cartReducer';

type Operator = 'plus' | 'minus';

export const CartPage = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isMessage, setIsMessage] = useState(false);

  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart);

  useEffect(() => {
    dispatch(cartActions.set());
  }, []);

  useEffect(() => {
    setTotalQuantity(cart.reduce((
      total: number,
      { quantity }: { quantity: number },
    ) => total + quantity, 0));

    setTotalPrice(cart.reduce((
      total: number,
      { quantity, product }: { quantity: number, product: Product },
    ) => total + quantity * (Math.round(product.price / 10) * 10 - 1), 0));
  }, [cart]);

  const getMessage = useCallback(() => {
    setIsMessage(true);

    const timeout = setTimeout(() => {
      setIsMessage(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const changeQuantity = (
    product: Product,
    quantity: number,
    operator: Operator,
  ) => () => {
    const newQuantity = quantity + ((operator === 'plus') ? 1 : -1);

    const newProductQuantityInfo = cart.find((
      { id }: { id: string },
    ) => (
      product?.id === id
    )) as CartType;

    dispatch(cartActions.updateQuantity({ ...newProductQuantityInfo, quantity: newQuantity }));
  };

  return (
    <div className="cart page__cart">
      <BackButton />

      <h1 className="cart__title">
        Cart
      </h1>

      <div className="cart__container">
        {!cart.length ? (
          <div className="no-results">
            Your cart is empty
          </div>
        ) : (
          <>
            <div className="cart__products">
              {cart.map(({ product, quantity, id }: CartType) => (
                <div
                  className="cart__product"
                  key={id}
                >
                  <div className="cart__product-info">
                    <button
                      type="button"
                      className={classNames(
                        'cart__delete-button',
                        'cart__delete-button--tablet',
                      )}
                      aria-label="Delete"
                      onClick={() => dispatch(cartActions.take({ product, quantity, id }))}
                      data-cy="cartDeleteButton"
                    />

                    <div className="cart__image-container">
                      <img
                        src={`./${product.image}`}
                        alt={product.name}
                        className="cart__image"
                      />
                    </div>

                    <p className="cart__name">
                      {product.name}
                    </p>

                    <div className="cart__quantity-block">
                      <button
                        type="button"
                        className={classNames(
                          'cart__quantity-button',
                          'cart__quantity-button--minus',
                        )}
                        aria-label="minus"
                        onClick={changeQuantity(product, quantity, 'minus')}
                        disabled={quantity === 1}
                      />

                      <p
                        className="cart__quantity"
                        data-cy="productQauntity"
                      >
                        {quantity}
                      </p>

                      <button
                        type="button"
                        className={classNames(
                          'cart__quantity-button',
                          'cart__quantity-button--plus',
                        )}
                        aria-label="plus"
                        onClick={changeQuantity(product, quantity, 'plus')}
                      />
                    </div>

                    <button
                      type="button"
                      className="cart__delete-button cart__delete-button--phone"
                      aria-label="Delete"
                      onClick={() => dispatch(cartActions.take({ product, quantity, id }))}
                      data-cy="cartDeleteButton"
                    />
                  </div>

                  <div className="cart__product-price">
                    {`$${quantity * (Math.round(product.price / 10) * 10 - 1)}`}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart__cost">
              <div className="cart__total-block">
                <p className="cart__total-price">
                  {`$${totalPrice}`}
                </p>

                <p className="cart__total-quantity">
                  {`Total for ${totalQuantity} items`}
                </p>
              </div>

              <div className="cart__line" />

              {isMessage ? (
                <button
                  type="button"
                  className={classNames(
                    'cart__checkout-button',
                    'cart__checkout-button--clicked',
                  )}
                  disabled
                >
                  We are sorry, but this feature is not implemented yet
                </button>
              ) : (
                <button
                  type="button"
                  className="cart__checkout-button"
                  onClick={getMessage}
                >
                  Checkout
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
