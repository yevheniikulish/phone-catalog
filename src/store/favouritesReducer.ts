import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../types/Product';

const initialState: Product[] = [];

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    add: (favourites, action: PayloadAction<Product>) => {
      favourites.push(action.payload);
      localStorage.setItem('favourites', JSON.stringify(favourites));
    },
    take: (favourites, action: PayloadAction<Product>) => {
      const newFavourites = favourites.filter(product => product.id !== action.payload.id);

      localStorage.setItem('favourites', JSON.stringify(newFavourites));

      return newFavourites;
    },
    set: () => {
      return JSON.parse(localStorage.getItem('favourites') || '[]');
    },
  },
});

export const { actions } = favouritesSlice;
export default favouritesSlice.reducer;
