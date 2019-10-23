/**
 * aixos 入口文件
 */

import axios from 'axios';
import { getStore, setStore } from '../libs/storage';
import { router } from '../router/index';
// import { Message } from 'iview';
import Cookies from 'js-cookie';


// 统一请求路径前缀
let BASE_URL = '/api';
let MAX_TIME = 15000;

// 超时设定
axios.defaults.timeout = MAX_TIME;

axios.interceptors.request.use(config => {
    return config;
}, err => {
    // window.alert.error('请求超时');
    return Promise.resolve(err);
});

// http response 拦截器
axios.interceptors.response.use(response => {
    const data = response.data;

    // 根据返回的code值来做不同的处理(和后端约定)
    switch (data.code) {
        case 401:
            // 未登录 清除已登录状态
            Cookies.set('userInfo', '');
            setStore('accessToken', '');
            if (router.history.current.name != "login") {
                if (data.message !== null) {
                    window.alert(data.message)
                } else {
                    window.alert.error("未知错误，请重新登录");
                }
                router.push('/login');
            }
            break;
        case 403:
            // 没有权限
            // if (data.message !== null) {
            //     window.alert.error(data.message);
            // } else {
            //     window.alert.error("未知错误");
            // }
            break;
        case 500:
            // 错误
            // if (data.message !== null) {
            //     window.alert.error(data.message);
            // } else {
            //     window.alert.error("未知错误");
            // }
            break;
        default:
            return data;
    }

    return data;
}, (err) => {
    // 返回状态码不为200时候的错误处理
    // window.alert.error(err.toString());
    return Promise.resolve(err);
});


/**
 * 对常用请求方法进行封装
 */
// get
export const getRequest = (url, params) => {
    let accessToken = getStore('accessToken');
    return axios({
        method: 'get',
        url: `${BASE_URL}${url}`,
        params: params,
        headers: {
            'accessToken': accessToken
        }
    });
};

// post
// export const postRequest = (url, params) => {
// let accessToken = getStore("accessToken");
// return axios({
//     method: 'post',
//     url: `${base}${url}`,
//     data: params,
//     transformRequest: [function (data) {
//         let ret = '';
//         for (let it in data) {
//             ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
//         }
//         return ret;
//     }],
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'accessToken': accessToken
//     }
// });
// };

// put
// export const putRequest = (url, params) => {
//     let accessToken = getStore("accessToken");
//     return axios({
//         method: 'put',
//         url: `${base}${url}`,
//         data: params,
//         transformRequest: [function (data) {
//             let ret = '';
//             for (let it in data) {
//                 ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
//             }
//             return ret;
//         }],
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'accessToken': accessToken
//         }
//     });
// };

// delete
// export const deleteRequest = (url, params) => {
//     let accessToken = getStore('accessToken');
//     return axios({
//         method: 'delete',
//         url: `${base}${url}`,
//         params: params,
//         headers: {
//             'accessToken': accessToken
//         }
//     });
// };

// export const importRequest = (url, params) => {
//     let accessToken = getStore('accessToken');
//     return axios({
//         method: 'post',
//         url: `${base}${url}`,
//         data: params,
//         headers: {
//             'accessToken': accessToken
//         }
//     });
// };

// upload
// export const uploadFileRequest = (url, params) => {
//     let accessToken = getStore('accessToken');
//     return axios({
//         method: 'post',
//         url: `${base}${url}`,
//         params: params,
//         headers: {
//             'accessToken': accessToken
//         }
//     });
// };