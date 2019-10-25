/**
 * 用户接口
 */
// 统一请求路径前缀在axios/index.js中修改
import { getRequest, postRequest } from '@/axios/index';

// 登录

export const login = (params) => {
    return postRequest('/user/login', params)
}

// 注册
export const regist = (params) => {
    return postRequest('/user/regist', params)
}

// 发送手机验证码
export const sendSms = (mobile, params) => {
    return getRequest(`/common/captcha/sendSms/${mobile}`, params)
}

// 短信验证码登录
export const smsLogin = (params) => {
    return postRequest('/user/smsLogin', params)
}

// 个人中心修改密码
export const changePass = (params) => {
    return postRequest('/user/modifyPass', params)
}

// 个人中心修改手机
export const changeMobile = (params) => {
    return postRequest('/user/changeMobile', params)
}