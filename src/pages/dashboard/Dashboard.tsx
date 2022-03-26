/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './Dashboard.module.scss';
import { selectWeather, selectCountry, selectCountries } from './redux/dashboardSelectors';
import { getCountry, getCountries, getWeather } from './redux/dashboardActions';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const weather = useAppSelector(selectWeather);
  const country = useAppSelector(selectCountry);
  const countries = useAppSelector(selectCountries);

  const [countryCode, setCountryCode] = useState('MT');

  useEffect(() => {
    dispatch(getCountry(countryCode))
      .then(() => {
        if(country) {
          dispatch(getWeather(country.latlng[0], country.latlng[1]))
        }
      })
      .then(() => dispatch(getCountries()));
  }, []);

  useEffect(() => {
    if (country && country.latlng.length) {
      const log = country.latlng[0];
      const lat = country.latlng[1];
      dispatch(getWeather(log, lat));
    }
  }, [country]);

  return (
    <div className={styles.row}>
      {(country && weather) && (
        <>
          <h1>{country.name.common}</h1>
          <h1>{weather.main.temp} °</h1>
          <h1>{weather.wind.speed} km/h</h1>
          <h1>{weather.main.humidity} %</h1>
          <h1>{weather.main.pressure} mb</h1>
        </>
      )}
    </div>
  );
};

export default Dashboard;
