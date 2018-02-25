import request from "../../config/axios";

// 确认用户和邮箱是否存在
export const checkEU = parameter =>
  request({
    url: "checkeu",
    data: {
      data: {
        parameter
      }
    }
  });

//发送邮件
export const sendMail = data =>
  request({
    url: "sendmail",
    data: {
      data
    }
  });

//发送登录请求
export const login = data =>
  request({
    url: "login",
    data: {
      data
    }
  });

//发送注册请求
export const register = data =>
  request({
    url: "register",
    data: {
      data
    }
  });

//发送重置密码请求
export const reset = data =>
  request({
    url: "reset",
    data: {
      data
    }
  });

//发送确认链接有效请求
export const checkLink = data =>
  request({
    url: "mailoverdue",
    data: {
      data
    }
  });

//发送添加任务请求
export const addTask = data =>
  request({
    url: "add",
    data: {
      data
    }
  });

//发送删除任务请求
export const delTask = data =>
  request({
    url: "del",
    data: {
      data
    }
  });

// API: 
// checkEU 
// sendMail 
// login 
// register 
// reset 
// checkLink 
// addTask 
// delTask
