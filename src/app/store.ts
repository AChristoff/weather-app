import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dashboardSlice from '../features/dashboard/redux/dashboardSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
