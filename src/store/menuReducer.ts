import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    open: () => true,
    close: () => false,
  },
});

export const { actions } = menuSlice;
export default menuSlice.reducer;
