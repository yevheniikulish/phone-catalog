import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { HeaderButtonIcon } from '../../types/HeaderButtonIcon';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { actions as menuActions } from '../../store/menuReducer';

const returnClassName = ({ isActive }: { isActive: boolean }) => (
  classNames(
    'header-button header__button',
    { 'haeder-button header__button header-button--active': isActive },
  )
);

type Props = {
  type: HeaderButtonIcon;
};

export const HeaderButton: React.FC<Props> = ({ type }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);

  const dispatch = useAppDispatch();

  const cart = useAppSelector(state => state.cart);
  const favourites = useAppSelector(state => state.favourites);

  const onClick = () => dispatch(menuActions.close());

  useEffect(() => {
    const count = (type === HeaderButtonIcon.Favourites)
      ? favourites.length
      : cart.reduce(((
        total: number,
        { quantity }: { quantity: number },
      ) => total + quantity), 0);

    setTotalQuantity(count);
  }, [cart, favourites]);

  return (
    <NavLink
      to={`/${type}`}
      className={returnClassName}
      onClick={onClick}
    >
      <div
        className={classNames(
          'header-button__icon',
          `header-button__icon--${type}`,
        )}
      />

      {!!totalQuantity && (
        <p className="header-button__count">
          {totalQuantity}
        </p>
      )}
    </NavLink>
  );
};
