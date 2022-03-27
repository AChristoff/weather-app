/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { BsThermometerSun } from 'react-icons/bs';

import { useAppSelector, useAppDispatch } from '../../_redux/hooks';
import { selectWeather, selectCountry, selectCountries } from './redux/dashboardSelectors';
import { getCountry, getCountriesSelect, getWeather } from './redux/dashboardActions';

import styles from './Dashboard.module.scss';
import DashboardTile from '../../components/DashboardTile';

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

  const tiles = ['Temperature', 'Wind', 'Humidity', 'Pressure'];

  return (
    <>
      <header className={styles.header} >
        <h1 className={styles.title} >
          <BsThermometerSun />
          Weather Today in
        </h1>
        <div className={styles.select}>
          <Select
            value={countryData}
            options={countries}
            onChange={(c: any) => setCountryData(c)}
          />
        </div>
      </header>
      {country && weather && (
        <>
          <main className={styles.tiles}>
            {tiles.map((tile, index) => (
              <DashboardTile key={index} title={tile} weather={weather} />
            ))}
          </main>
        </>
      )}
      <footer></footer>
    </>
  );
};

export default Dashboard;
