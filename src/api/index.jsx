import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.LOLOG_API_URL,
});
