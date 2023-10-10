import axios from 'axios';

export const listFetcher = (url) => {
  return axios.get('http://localhost:3001' + url)
    .then((res) => res.data);
}
