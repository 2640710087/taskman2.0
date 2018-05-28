import {
    request
} from "../../config/axios";

// 确认用户和邮箱是否存在
export const checkEU = async parameter =>
    await request({
        url: "checkeu",
        data: {
            data: {
                parameter
            }
        }
    });

//发送邮件
export const sendMail = async data =>
    await request({
        url: "sendmail",
        data: {
            data
        }
    });

//发送登录请求
export const login = async data =>
    await request({
        url: "login",
        data: {
            data
        }
    });

//发送注册请求
export const register = async data =>
    await request({
        url: "register",
        data: {
            data
        }
    });

//发送重置密码请求
export const reset = async data =>
    await request({
        url: "reset",
        data: {
            data
        }
    });

//发送确认链接有效请求
export const checkLink = async data =>
    await request({
        url: "mailoverdue",
        data: {
            data
        }
    });

export const getModuleStatus = async () => await request({
    url: "getStatus"
});

export const getArtList = async () =>
    await request({
        url: "article"
    });

export const search = async keyword => await request({
    url: "search",
    data: {
        data: {
            keyword
        }
    }
});

export const addArt = async data =>
    await request({
        url: 'addArt',
        data: {
            data
        }
    })

export const getTagList = async () =>
    await request({
        url: 'allTag'
    })

export const checkToken = async (username, token) =>
    await request({
        url: 'checktoken',
        data: {
            data: {
                username,
                token
            }
        }
    })