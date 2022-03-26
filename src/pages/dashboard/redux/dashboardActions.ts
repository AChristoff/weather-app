import axios from "axios";
import { Dispatch } from "redux";
import { dashboardSlice } from "./dashboardSlice"
import { EStatus } from "../_interfaces";

const { actions } = dashboardSlice;

export const getCountry = (code: string) => async (dispatch: Dispatch) => {
  dispatch(actions.setWeatherStatus(EStatus.loading));

  try {
    const headers = {
      headers: {
        'Content-type': 'application/json',
      },
    }
    
    const res = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`, headers);
    dispatch(actions.setCountry(res.data[0]));
    dispatch(actions.setCountryStatus(EStatus.success));
  } catch (error: any) {
    console.error(error);
    dispatch(actions.setCountryStatus(EStatus.error));
  }
}

export const getCountries = () => async (dispatch: Dispatch) => {
  dispatch(actions.setCountriesStatus(EStatus.loading));

  try {
    const headers = {
      headers: {
        'Content-type': 'application/json',
      },
    }
    
    const res = await axios.get('https://restcountries.com/v3.1/all', headers);
    dispatch(actions.setCountries(res.data));
    dispatch(actions.setCountriesStatus(EStatus.success));
  } catch (error: any) {
    console.error(error);
    dispatch(actions.setCountriesStatus(EStatus.error));
  }
}

export const getWeather = (lat: number, lon: number, units="metric") => async (dispatch: Dispatch) => {
  dispatch(actions.setWeatherStatus(EStatus.loading));

  try {
    const apiKey = "bc2a594cbf7320aa16d8c5dd5d487204"
    const headers = {
      headers: {
        'Content-type': 'application/json',
      },
    }
    
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`, headers);
    dispatch(actions.setWeather(res.data));
    dispatch(actions.setWeatherStatus(EStatus.success));
  } catch (error: any) {
    console.error(error);
    dispatch(actions.setWeatherStatus(EStatus.error));
  }
}