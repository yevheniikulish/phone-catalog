import { configureStore } from '@reduxjs/toolkit';

import favouritesReducer from './favouritesReducer';
import cartReducer from './cartReducer';

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    cart: cartReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
