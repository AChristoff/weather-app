import { RootState } from '../../../_redux/store'

export const selectWeather = (state: RootState) => state.UI_weather.weather
export const selectCountry = (state: RootState) => state.UI_weather.country
export const selectCountries = (state: RootState) => state.UI_weather.countriesSelect
export const selectCountriesStatus = (state: RootState) => state.UI_weather.countriesStatus
export const selectWeatherStatus = (state: RootState) => state.UI_weather.weatherStatus
