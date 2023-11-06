import axios from 'axios';

const client = axios.create({
  baseURL: 'https://educroom-api.onrender.com/api',
  // baseURL: "127.0.0.1:4000/api"
});

export default client;
