import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartType } from '../types/CartType';

const initialState: CartType[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (cart, action: PayloadAction<CartType>) => {
      cart.push(action.payload);
    },
    take: (cart, action: PayloadAction<CartType>) => {
      return cart.filter(phone => phone !== action.payload);
    },
  },
});

export const { actions } = cartSlice;
export default cartSlice.reducer;
