import { createSlice } from '@reduxjs/toolkit';
import { IDashboardState, EStatus } from './interfaces';

const initialState: IDashboardState = {
  countries: [],
  countriesStatus: EStatus.loading,
};

export const dashboardSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
      state.countriesStatus = EStatus.success;
    },
    setCountriesStatus: (state, action: {payload: EStatus, type: string}) => {
      state.countriesStatus = action.payload;
    },

  },
});

export default dashboardSlice.reducer;
