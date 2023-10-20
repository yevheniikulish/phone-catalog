import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Phone } from '../types/Phone';

const initialState: Phone[] = [];

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    add: (favourites, action: PayloadAction<Phone>) => {
      favourites.push(action.payload);
      localStorage.setItem('favourites', JSON.stringify(favourites));
    },
    take: (favourites, action: PayloadAction<Phone>) => {
      const newFavourites = favourites.filter(phone => phone.id !== action.payload.id);

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
