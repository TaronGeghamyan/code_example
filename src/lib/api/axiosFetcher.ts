import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  // baseURL: '',
  headers: {
    Accept: 'application/json',
  },
});

export default instance;
