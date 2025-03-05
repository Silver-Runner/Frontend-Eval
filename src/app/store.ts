import { configureStore } from '@reduxjs/toolkit';
import { shoppingApi } from '../api/shoppingApi';

export const store = configureStore({
  reducer: {
    [shoppingApi.reducerPath]: shoppingApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shoppingApi.middleware), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
