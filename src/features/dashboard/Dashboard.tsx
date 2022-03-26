import { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './Dashboard.module.scss';
import { selectCountries } from './redux/dashboardSelectors';
import { getCountries } from './redux/dashboardActions';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectCountries);

  return (
    <div className={styles.row}>
      <button className={styles.asyncButton} onClick={() => dispatch(getCountries())}>
        Get Countries
      </button>
      {countries.length > 0 && <h1>{countries[0].name.common}</h1>}
    </div>

  );
};

export default Dashboard;
