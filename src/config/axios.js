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



export const request = async param => {
    let url = param.url
    try {
        if (API[url] === undefined) {
            url = `${url}.php`
        } else {
            url = API[url];
        }
    } catch (e) {
        console.log(e)
    }
    return http({
        url: url,
        data: qs.stringify(param.data),
    })
}