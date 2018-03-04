import axios from 'axios';
import { baseURL, API } from './env';
import qs from 'qs';

const http = axios.create({
  method: 'post',
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 15000,
  xsrfHeaderName: 'X-XSRF-TOKEN',
  xsrfCookieName: 'XSRF-TOKEN', 
})

http.interceptors.response.use( response => {
  return response.data;
}, error => {
  return Promise.reject(error);
})

export const request = async param => {
  if (API[param.url] === undefined) return;
  return http({
    url: API[param.url],
    data: qs.stringify(param.data),
  })
}
