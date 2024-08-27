import { fetchUtils, DataProvider } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const apiUrl = process.env.URL!; // Ваш API URL
const httpClient = (url: string, options: fetchUtils.Options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    if (token) {
      (options.headers as Headers).append('Authorization', `Bearer ${token}`);
    }
  return fetchUtils.fetchJson(url, options);
};

const dataProvider: DataProvider = simpleRestProvider(apiUrl, httpClient);
export { dataProvider };
