import axios from "axios";
import { Dispatch } from "redux";
import { dashboardSlice } from "./dashboardSlice"
import { EStatus } from "./interfaces";

const { actions } = dashboardSlice;

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