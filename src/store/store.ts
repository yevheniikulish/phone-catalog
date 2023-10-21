import { configureStore } from '@reduxjs/toolkit';

import favouritesReducer from './favouritesReducer';
import cartReducer from './cartReducer';
import menuReducer from './menuReducer';

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    cart: cartReducer,
    menu: menuReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
