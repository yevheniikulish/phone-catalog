import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Phone } from '../types/Phone';

const initialState: Phone[] = [];

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    add: (favourites, action: PayloadAction<Phone>) => {
      favourites.push(action.payload);
    },
    take: (favourites, action: PayloadAction<Phone>) => {
      return favourites.filter(phone => phone !== action.payload);
    },
  },
});

export const { actions } = favouritesSlice;
export default favouritesSlice.reducer;
