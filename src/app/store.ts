import { configureStore } from '@reduxjs/toolkit';
import { shoppingApi } from '../redux/services/shoppingApi';
import filterReducer from '../features/filter/filterSlice';
import themeReducer from '../features/theme/themeSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'filter',
  version: 1,
  storage,
  whitelist: ['filter','theme'],
};

const rootReducer = combineReducers({
  filter: filterReducer,
  theme: themeReducer,
  [shoppingApi.reducerPath]: shoppingApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(shoppingApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
