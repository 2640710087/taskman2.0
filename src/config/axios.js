import axios from 'axios';
import {
    baseURL,
    API
} from './env';
import qs from 'qs';

const http = axios.create({
    method: 'post',
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    timeout: 15000,
})

http.interceptors.response.use(response => {
    return response.data;
}, error => {
    return Promise.reject(error);
})



export const request = async ({
    url,
    data,
    method = 'POST'
}) => {
    method = method.toLocaleUpperCase()
    try {
        if (API[url] === undefined) {
            url = `${url}.php`
        } else {
            url = API[url];
        }
        if (method === 'GET') {
            url += `?${qs.stringify(data)}`;
        } else {
            data = qs.stringify(data);
        }
    } catch (e) {
        console.log(e)
    }
    return http({
        url: url,
        method,
        data,
    })
}