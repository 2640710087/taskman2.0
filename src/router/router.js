import task from '../page/task/task';

const login = r => require.ensure([], () => r(require('../page/login/login')), 'login');
const register = r => require.ensure([], () => r(require('../page/register/register')), 'register');
const resetPassword = r => require.ensure([], () => r(require('../page/reset/resetPassword')), 'resetPassword');
const sendmail = r => require.ensure([], () => r(require('../page/reset/sendmail')), 'sendmail');

export default [
  {
    path: '/',
    name: 'index',
    component: task
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    //发送邮件
    path: '/reset',
    name: 'sendmail',
    component: sendmail
  },
  {
    //验证key，然后重置密码，否则跳转
    path: '/reset_password',
    name: 'reset_password',
    component: resetPassword
  }
]