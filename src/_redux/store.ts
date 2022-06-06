import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import weatherUI, { weatherAPI, countryAPI } from '../pages/dashboard/redux/dashboardSlice';

export const store = configureStore({
  reducer: {
    [weatherUI.name]: weatherUI.reducer,
    [countryAPI.reducerPath]: countryAPI.reducer,
    [weatherAPI.reducerPath]: weatherAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryAPI.middleware).concat(weatherAPI.middleware),
});


setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
