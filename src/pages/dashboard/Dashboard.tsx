/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Select from 'react-select';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectWeather, selectCountry, selectCountries } from './redux/dashboardSelectors';
import { getCountry, getCountriesSelect, getWeather } from './redux/dashboardActions';

function getCardinalDirection(angle: number): string {
  const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
  return directions[Math.round(angle / 45)];
}

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const weather = useAppSelector(selectWeather);
  const country = useAppSelector(selectCountry);
  const countries = useAppSelector(selectCountries);

  const [countryData, setCountryData] = useState({
    value: 'MT',
    label: 'Malta',
    latlng: [35.83333333, 14.58333333],
  });

  useEffect(() => {
    dispatch(getCountry(countryData.value))
      .then(() => {
        if (country) {
          dispatch(getWeather(country.latlng[0], country.latlng[1]));
        }
      })
      .then(() => dispatch(getCountriesSelect()));
  }, []);

  useEffect(() => {
    if (countryData.latlng.length) {
      const log = countryData.latlng[0];
      const lat = countryData.latlng[1];
      dispatch(getWeather(log, lat));
    }
  }, [countryData]);

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h1 style={{marginRight: "1rem", }} >Weather Today in</h1>
        <div style={{width: "15rem"}}>
          <Select value={countryData} options={countries} onChange={(c: any) => setCountryData(c)} />
        </div>
      </div>
      {country && weather && (
        <>
          <h1>
            Temperature <br />
            {weather.main.temp}° <br />
            min {weather.main.temp_min}° / max {weather.main.temp_max}°
          </h1>
          <h1>
            Wind <br />
            {weather.wind.speed}km/h <br />
            {getCardinalDirection(weather.wind.deg)}{' '} <br />
          </h1>
          <h1>Humidity <br />{weather.main.humidity} %</h1>
          <h1>Pressure <br />{weather.main.pressure} mb</h1>
        </>
      )}
    </>
  );
};

export default Dashboard;
