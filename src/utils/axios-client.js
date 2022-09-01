import axios from 'axios';
import storage from './storage';

import { BASEURL } from './urls';
const headers = {
  Authorization: `Bearer ${storage.getTokenFromCookies('_autht')}`,
  'content-type': 'multipart/form-data'
};
const axiosClient = axios.create({
  baseURL: BASEURL
});
axiosClient.interceptors.request.use(
  async (config) => {
    try {
      config.headers['Content-Type'] = 'application/json;charset=UTF-8';
      config.headers['Access-Control-Allow-Origin'] = '*';
      // config.headers['Authorization'] = `Bearer ${storage.getTokenFromCookies(
      //   '_autht'
      // )}`;

      config.headers['Authorization'] = `Bearer ${localStorage.getItem(
        'token'
      )}`;
      // console.log(localStorage.getItem('_token'))
      return config;
    } catch (error) {
      return config;
    }
  },

  (error) => error
);

export default axiosClient;

// const HOST = process.env.NEXT_APP_BASE_URI;
// const axiosClient = axios.create({
//     baseURL: BASEURL,
//     withCredentials: true,
//     headers: {
//         'Content-Type': 'application/json',
//         // Authorization: token,
//     },
// })

// export default axiosClient

// const AUTH_TOKEN =
//   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2FiY2YyZmMzMTRmZDYyYzI1NjA0YWMyMzc0ZGNmNyIsInN1YiI6IjVmZGMxYTIwMGYyYWUxMDAzY2RmNmFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.44RBtjNpot5pmUlrbCRVFULt8PWCECJE5P5VKELxUhg'

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/',
//   headers: {
//     Authorization: AUTH_TOKEN,
//   },
// })

// export default instance
