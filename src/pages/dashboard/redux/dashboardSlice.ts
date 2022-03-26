import { createSlice } from '@reduxjs/toolkit';
import { IDashboardState, EStatus } from '../_interfaces';

const initialState: IDashboardState = {
  country: null,
  countryStatus: EStatus.loading,
  countriesSelect: [],
  countriesStatus: EStatus.loading,
  weather: null,
  weatherStatus: EStatus.loading,
};

export const dashboardSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
      state.countryStatus = EStatus.success;
    },
    setCountryStatus: (state, action: {payload: EStatus, type: string}) => {
      state.countryStatus = action.payload;
    },
    setCountriesSelect: (state, action) => {
      state.countriesSelect = action.payload;
      state.countriesStatus = EStatus.success;
    },
    setCountriesStatus: (state, action: {payload: EStatus, type: string}) => {
      state.countriesStatus = action.payload;
    },
    setWeather: (state, action) => {
      state.weather = action.payload;
      state.weatherStatus = EStatus.success;
    },
    setWeatherStatus: (state, action: {payload: EStatus, type: string}) => {
      state.weatherStatus = action.payload;
    }
  },
});

export default dashboardSlice.reducer;
