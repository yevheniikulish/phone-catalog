import React from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../store/hooks';
import { actions as menuActions } from '../../store/menuReducer';

export const Logo = () => {
  const dispatch = useAppDispatch();

  const onClick = () => dispatch(menuActions.close());

  return (
    <Link
      to="/"
      className="logo header__logo"
      onClick={onClick}
    >
      <img
        src="./img/logo/logo.svg"
        alt="Logo"
        className="logo__image"
      />
    </Link>
  );
};
