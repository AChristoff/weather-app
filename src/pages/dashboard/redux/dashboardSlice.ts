import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDashboardState, EStatus, ICountry, ICountrySelect } from '../_interfaces';

const initialState: IDashboardState = {
  country: null,
  countryStatus: EStatus.loading,
  countriesSelect: [],
  countriesStatus: EStatus.loading,
  weather: null,
  weatherStatus: EStatus.loading,
};

/**
 * UI state
 */
export const weatherUI = createSlice({
  name: 'weatherUI',
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
      state.countryStatus = EStatus.success;
    },
    setCountryStatus: (state, action: { payload: EStatus; type: string }) => {
      state.countryStatus = action.payload;
    },
    setCountriesSelect: (state, action) => {
      state.countriesSelect = action.payload;
      state.countriesStatus = EStatus.success;
    },
    setCountriesStatus: (state, action: { payload: EStatus; type: string }) => {
      state.countriesStatus = action.payload;
    },
    setWeather: (state, action) => {
      state.weather = action.payload;
      state.weatherStatus = EStatus.success;
    },
    setWeatherStatus: (state, action: { payload: EStatus; type: string }) => {
      state.weatherStatus = action.payload;
    },
  },
});

export default weatherUI;

/**
 * Server Cache
 */
export const countryAPI = createApi({
  reducerPath: 'countryAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v3.1/',
  }),
  endpoints: (builder) => ({
    getCountryByCode: builder.query<ICountry, string>({
      query: (code) => `alpha/${code}`,
    }), // <storeDate: type, function parameters: type>
    getCountriesSelect: builder.query<ICountrySelect[], void>({
      query: () => `all`,
      transformResponse: (res: ICountry[]): ICountrySelect[] => {
        const countries = res.reduce((acc: any[], country) => {
          acc.push({ value: country.cca2, label: country.name.common, latlng: country.latlng });
          return acc;
        }, []);

        return countries;
      },
    }),
  }),
});

export const { useGetCountryByCodeQuery, useGetCountriesSelectQuery } = countryAPI;

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  endpoints: (builder) => ({
    getWeather: builder.query<any, { lon: number; lat: number; units: string }>({
      query: ({lat=0, lon=0, units='metric'}) => {
        const apiKey = process.env.REACT_APP_API_KEY;
        return `weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
      },
    }),
  }),
});

export const { useGetWeatherQuery } = weatherAPI;
