import { RootState } from "../../../app/store";

export const selectWeather = (state: RootState) => state.dashboard.weather;
export const selectCountry = (state: RootState) => state.dashboard.country;
export const selectCountries = (state: RootState) => state.dashboard.countries;