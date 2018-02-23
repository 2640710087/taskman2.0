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

const request = param => {
  if (API[param.url] === undefined) return;
  return http({
    url: API[param.url],
    data: qs.stringify(param.data)
  })
}

export default request;