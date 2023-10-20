import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartType } from '../types/CartType';

const initialState: CartType[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (cart, action: PayloadAction<CartType>) => {
      cart.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(cart));
    },
    take: (cart, action: PayloadAction<CartType>) => {
      const newCart = cart.filter(product => product.id !== action.payload.id);

      localStorage.setItem('cart', JSON.stringify(newCart));

      return newCart;
    },
    updateQuantity: (cart, action: PayloadAction<CartType>) => {
      const newCart = cart.map(product => {
        if (product.id !== action.payload.id) {
          return product;
        }

        return { ...product, quantity: action.payload.quantity };
      });

      localStorage.setItem('cart', JSON.stringify(newCart));

      return newCart;
    },
    set: () => {
      return JSON.parse(localStorage.getItem('cart') || '[]');
    },
  },
});

export const { actions } = cartSlice;
export default cartSlice.reducer;
