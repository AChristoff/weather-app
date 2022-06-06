/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import Select from 'react-select';
import { BsThermometerSun } from 'react-icons/bs';

import styles from './Dashboard.module.scss';
import DashboardTile from '../../components/DashboardTile';

import Loader from '../../components/Loader';
import {
  // useGetCountryByCodeQuery,
  useGetCountriesSelectQuery,
  useGetWeatherQuery,
} from './redux/dashboardSlice';

const Dashboard = () => {
  
  const [countryData, setCountryData] = useState({
    value: 'MT',
    label: 'Malta',
    latlng: [35.83333333, 14.58333333],
  });

  // useEffect(() => {fetch(data)}, [])
  // const {
  //   data: country,
  //   error: countryError,
  //   isFetching: countryLoading,
  //   refetch 
  // } = useGetCountryByCodeQuery(countryData.value, {skip: Boolean(countryData.value !== "MT")});
  

  // useEffect(() => {fetch()}, [])
  const {
    data: countries,
    // error: countriesError,
    isFetching: countriesLoading,
  } = useGetCountriesSelectQuery();


  // useEffect(() => {if(data) fetch(data)}, [data])
  const {
    data: weather,
    error: weatherError,
    isLoading: weatherInitialLoad,
    isFetching: weatherLoading,
  } = useGetWeatherQuery(
    { lat: countryData.latlng?.[0], lon: countryData.latlng?.[1], units: 'metric' },
    { skip: !Boolean(countryData.latlng?.length) }
  );
  

  const tiles = ['Temperature', 'Wind', 'Humidity', 'Pressure'];

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <BsThermometerSun />
          Weather Today in
        </h1>
        <div className={styles.select}>
          <Select
            value={countryData}
            options={countries}
            onChange={(c: any) => setCountryData(c)}
            isLoading={countriesLoading}
          />
        </div>
      </header>
      {weatherInitialLoad && (
        <section className={styles.wrapper}>
          <Loader />
        </section>
      )}
      {weather && (
        <main className={styles.tiles}>
          {tiles.map((tile, index) => (
            <DashboardTile
              key={index}
              title={tile}
              weather={weather}
              weatherLoading={weatherLoading}
            />
          ))}
        </main>
      )}
      {weatherError && <h4 className={styles.error}>Ops something wrong...</h4>}

      <footer className={styles.footer}>
        <a href="https://alekshristov.com/" target="_blank" rel="noopener noreferrer">
          © Aleksov
        </a>
      </footer>
    </>
  );
};

export default Dashboard;
