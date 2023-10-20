import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';

import { HomePage } from './pages/HomePage/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CartPage } from './pages/CartPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { NotFoundPage } from './pages/NotFoundPage';

import store from './store/store';

export const Root = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="phones">
            <Route index element={<PhonesPage />} />

            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>

          <Route path="tablets">
            <Route index element={<TabletsPage />} />

            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>

          <Route path="accessories">
            <Route index element={<AccessoriesPage />} />

            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>

          <Route path="cart" element={<CartPage />} />

          <Route path="favourites" element={<FavouritesPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);
