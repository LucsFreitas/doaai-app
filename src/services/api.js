import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aw-doaai-api.herokuapp.com/',
});

export default api;