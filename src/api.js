import axios from 'axios';

const clientId = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: 'https://api.lot.com/hr/v3',
  headers: {
    'X-Api-Key': clientId,
  },
});

export default api;
