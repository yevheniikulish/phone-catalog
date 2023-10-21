import React, {
  useEffect,
  useState,
} from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { Loader } from '../../components/Loader';
import { Like } from '../../components/Like';
import { BackButton } from '../../components/BackButton';
import { Breadcrumbs } from '../../components/Breadcrumbs';

import { getProducts } from '../../functions/getProducts';
import { getProductInfo } from '../../functions/getProductInfo';

import { ProductInfo } from '../../types/ProductInfo';
import { Product } from '../../types/Product';

import { colors } from '../../services/colors';
import { info, specsNames } from '../../services/specs';

import { actions as cartActions } from '../../store/cartReducer';
import { actions as favouritesActions } from '../../store/favouritesReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const ProductDetailsPage = () => {
  const [productInfo, setProductInfo] = useState<ProductInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentCapacity, setCurrentCapacity] = useState('');
  const [currentColor, setCurrentColor] = useState('');
  const [product, setProduct] = useState<Product | null>(null);
  const [isError, setIsError] = useState(false);

  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart);
  const favourites = useAppSelector(state => state.favourites);

  useEffect(() => {
    dispatch(cartActions.set());
    dispatch(favouritesActions.set());
  }, []);

  const { productId } = useParams();

  useEffect(() => {
    getProducts()
      .then(phones => {
        setProduct(phones.find((
          desiredPhone: Product,
        ) => desiredPhone.phoneId === productId));
      })
      .catch(() => {
        throw new Error('Loading phones error');
      });
  }, [productInfo]);

  useEffect(() => {
    const specs = productId?.split('-');

    setCurrentCapacity(specs?.at(-2)?.toUpperCase() || '');
    setCurrentColor(specs?.at(-1) || '');
  }, [productId]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getProductInfo(productId || '')
      .then(currentPhone => {
        setProductInfo(currentPhone);
        setCurrentImage(currentPhone.images[0]);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);

  const handleCurrentImage = (image: string) => () => {
    setCurrentImage(image);
  };

  const link = `/phones/${productId?.split('-').slice(0, -2).join('-')}`;

  return (
    isLoading ? (
      <Loader />
    ) : (
      <div className="product-details page__details">
        <Breadcrumbs name={productInfo?.name || ''} />

        <BackButton />

        {(!product || isError) ? (
          <h2 className="no-results">
            Phone was not found
          </h2>
        ) : (
          <>
            <h1 className="product-details__title">
              {productInfo?.name}
            </h1>

            <div className="product-details__interaction-block">
              <div className="product-details__images">
                {productInfo?.images.map(image => (
                  <button
                    type="button"
                    className={classNames(
                      'product-details__image-button',
                      {
                        'product-details__image-button--selected': (
                          image === currentImage
                        ),
                      },
                    )}
                    key={image}
                    onClick={handleCurrentImage(image)}
                  >
                    <img
                      src={`./${image}`}
                      alt={image}
                      className="product-details__image-icon"
                    />
                  </button>
                ))}
              </div>

              <div className="product-details__current-image">
                <img
                  src={`./${currentImage}`}
                  alt={productInfo?.name}
                  className="product-details__phone-image"
                />
              </div>

              <div className="product-details__interaction">
                <div className="product-details__select-container">
                  <p className="product-details__name">
                    Available colors
                  </p>

                  <ul className="product-details__select-buttons">
                    {productInfo?.colorsAvailable.map(color => (
                      <li
                        key={color}
                        className={classNames(
                          'product-details__color',
                          {
                            'product-details__color--active': (
                              color === currentColor
                            ),
                          },
                        )}
                      >
                        <Link
                          to={`${link}-${currentCapacity.toLowerCase()}-${color}`}
                          className={classNames(
                            'product-details__color-border',
                            {
                              'product-details__color-border--active': (
                                color === currentColor
                              ),
                            },
                          )}
                          style={{ backgroundColor: colors[color] }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="product-details__line" />

                <div className="product-details__select-container">
                  <p className="product-details__name">
                    Select capacity
                  </p>

                  <div className="product-details__select-buttons">
                    {productInfo?.capacityAvailable.map(capacity => (
                      <Link
                        to={`${link}-${capacity.toLowerCase()}-${currentColor}`}
                        className={classNames(
                          'product-details__capacity',
                          {
                            'product-details__capacity--active': (
                              capacity === currentCapacity
                            ),
                          },
                        )}
                        key={capacity}
                      >
                        {capacity}
                      </Link>
                    ))}
                  </div>
                </div>

                <div
                  className={classNames(
                    'product-details__line',
                    'product-details__line--bigger',
                  )}
                />

                <div className="product-details__price-block">
                  <p className="product-details__price">
                    {`$${Math.round((productInfo?.priceDiscount || 0) / 10) * 10 - 1} `}

                    <span className="product-details__regular-price">
                      {`$${Math.round((productInfo?.priceRegular || 0) / 10) * 10 - 1}`}
                    </span>
                  </p>

                  <div className="product-details__buttons">
                    {cart.some(productInCart => productInCart.id === product.id) ? (
                      <button
                        className={classNames(
                          'product-details__cart-button',
                          'product-details__cart-button--added',
                        )}
                        type="button"
                        onClick={() => dispatch(cartActions.take({ product, id: (product?.id || '0'), quantity: 1 }))}
                      >
                        Added to cart
                      </button>
                    ) : (
                      <button
                        className="product-details__cart-button"
                        type="button"
                        onClick={() => dispatch(cartActions.add({ product, id: (product?.id || '0'), quantity: 1 }))}
                      >
                        Add to cart
                      </button>
                    )}

                    <button
                      type="button"
                      className="product-details__favourites-button"
                      onClick={() => (
                        favourites.some(favouriteProduct => favouriteProduct.id === product.id)
                          ? dispatch(favouritesActions.take(product))
                          : dispatch(favouritesActions.add(product))
                      )}
                    >
                      <div
                        className={classNames(
                          'product-details__favourites-icon',
                          {
                            'product-details__favourites-icon--added': (
                              favourites.some(
                                favouriteProduct => favouriteProduct.id === product.id,
                              )
                            ),
                          },
                        )}
                      />
                    </button>
                  </div>
                </div>

                <div className="product-details__info">
                  {info.map(specName => (
                    <div className="product-details__info-row" key={specName}>
                      <p className="product-details__info-name">
                        {specName}
                      </p>

                      <p className="product-details__info-value">
                        {productInfo && productInfo[specName.toLowerCase()]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="product-details__text-block">
              <div
                className="product-details__description"
                data-cy="productDescription"
              >
                <h3 className="product-details__text-subtitle">
                  About
                </h3>

                <div
                  className={classNames(
                    'product-details__line',
                    'product-details__line--bigger',
                  )}
                />

                {productInfo?.description.map(description => (
                  <div
                    className="product-details__description-block"
                    key={description.title}
                  >
                    <p className="product-details__description-title">
                      {description.title}
                    </p>

                    <p className="product-details__description-text">
                      {description.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="product-details__specs">
                <h3 className="product-details__text-subtitle">
                  Tech specs
                </h3>

                <div className="product-details__line" />

                {specsNames.map(specName => (
                  <div className="product-details__specs-row" key={specName}>
                    <p className="product-details__specs-name">
                      {specName === 'Capacity' ? 'Built in memory' : specName}
                    </p>

                    <p className="product-details__specs-value">
                      {productInfo && productInfo[specName.toLowerCase()]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Like />
          </>
        )}
      </div>
    )
  );
};
