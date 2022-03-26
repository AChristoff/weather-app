export interface ICountry {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string[];
  capitalInfo: { latlng: number[] };
  car: { signs: string[]; side: string };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: { png: string; svg: string };
  continents: string[];
  currencies: { UYU: { name: string; symbol: string } };
  demonyms: {
    eng: { f: string; m: string };
    fra: { f: string; m: string };
  };
  fifa: string;
  flag: string;
  flags: { png: string; svg: string };
  gini: { [key: number]: number };
  idd: { root: string; suffixes: string[] };
  independent: boolean;
  landlocked: boolean;
  languages: { spa: string };
  latlng: number[];
  maps: { googleMaps: string; openStreetMaps: string };
  name: {
    common: string;
    official: string;
    nativeName: { spa: { common: string; official: string } };
  };
  population: number;
  postalCode: { format: string; regex: string };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: any;
  unMember: boolean;
}

export interface ICountrySelect {
  value: string 
  label: string, 
  latlng: number[]
}

export enum EStatus {
  loading = 'loading',
  success = 'success',
  error = 'error',
}

export interface IDashboardState {
  country: ICountry | null;
  countryStatus: EStatus;
  countriesSelect: ICountrySelect[];
  countriesStatus: EStatus;
  weather: IWeather | null;
  weatherStatus: EStatus;
}

export interface IWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
