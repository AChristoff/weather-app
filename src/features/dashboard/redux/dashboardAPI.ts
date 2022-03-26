import axios from 'axios'

const headers = {
  headers: {
    'Content-type': 'application/json',
  },
}

export const countriesAPI = () => {
  return axios.get('https://restcountries.com/v3.1/all', headers)
}
