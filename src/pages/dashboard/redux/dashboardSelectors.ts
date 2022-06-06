import { RootState } from "../../../_redux/store";

export const selectWeather = (state: RootState) => state.weatherUI.weather;
export const selectCountry = (state: RootState) => state.weatherUI.country;
export const selectCountries = (state: RootState) => state.weatherUI.countriesSelect;
export const selectCountriesStatus = (state: RootState) => state.weatherUI.countriesStatus;
export const selectWeatherStatus = (state: RootState) => state.weatherUI.weatherStatus;