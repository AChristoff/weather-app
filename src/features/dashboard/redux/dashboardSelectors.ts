import { RootState } from "../../../app/store";

export const selectCountries = (state: RootState) => state.dashboard.countries;