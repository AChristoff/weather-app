import { IWeather } from "../pages/dashboard/_interfaces";
import styles from "../pages/dashboard/Dashboard.module.scss";

interface IProps {
  title: string;
  weather: IWeather;
}

function getCardinalDirection(angle: number): string {
  const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
  return directions[Math.round(angle / 45)];
}

const DashboardTile: React.FC<IProps> = ({ title, weather }) => {
  return (
    <section className={styles.tile}>
      <h4>{title}</h4>
      {title === 'Temperature' && (
        <p>
          {weather.main.temp}° <br />
          min {weather.main.temp_min}° / max {weather.main.temp_max}°
        </p>
      )}
      {title === 'Wind' && (
        <p>
          {weather.wind.speed}km/h <br />
          {getCardinalDirection(weather.wind.deg)} <br />
        </p>
      )}
      {title === 'Humidity' && (
        <p>
          {weather.main.humidity} %
        </p>
      )}
      {title === 'Pressure' && (
        <p>
          {weather.main.pressure} mb
        </p>
      )}
    </section>
  );
};

export default DashboardTile;