// import task from '../page/task/task';

const login = r =>
    require.ensure([], () => r(require("../page/login/login")), "login");

const register = r =>
    require.ensure(
        [],
        () => r(require("../page/register/register")),
        "register"
    );

const resetPassword = r =>
    require.ensure(
        [],
        () => r(require("../page/reset/resetPassword")),
        "resetPassword"
    );

const sendmail = r =>
    require.ensure([], () => r(require("../page/reset/sendmail")), "sendmail");

const notfound = r =>
    require.ensure(
        [],
        () => r(require("../page/notFound/notfound")),
        "notFound"
    );

const home = r =>
    require.ensure([], () => r(require("../page/home/home")), "home");

const article = r =>
    require.ensure([], () => r(require("../page/home/article")), "article");

const upload = r =>
    require.ensure([], () => r(require("../page/home/upload")), "upload");

const user = r =>
    require.ensure([], () => r(require("../page/home/user")), "user");

import { checkLink as checklink } from "../plugins/account/resetPassword";

export default [
    {
        path: "/",
        name: "index",
        component: home,
        redirect: "article",
        children: [
            {
                path: "article",
                name: "article",
                component: article
            },
            {
                path: "article/:username",
                name: "upload",
                component: user
            },
            {
                path: "article/:username/upload",
                name: "upload",
                component: upload
            }
        ]
    },
    {
        path: "/login",
        name: "login",
        component: login
    },
    {
        path: "/register",
        name: "register",
        component: register
    },
    {
        //发送邮件
        path: "/reset",
        name: "reset",
        component: sendmail
    },
    {
        //验证key，然后重置密码，否则跳转
        path: "/resetpass/:random",
        name: "resetpass",
        component: resetPassword,
        meta: {
            requiresAuth: true
        },
        beforeEnter: async (to, from, next) => {
            await checklink(to.params.random).then(res => {
                if (res.code === 212) {
                    next();
                } else {
                    if (res.code === 412)
                        next("/link_failed/" + to.params.random);
                    else if (res.code === 313) next("/notfound");
                }
            });
        }
    },
    {
        path: "/link_failed/:random",
        name: "link_failed",
        component: notfound,
        beforeEnter: async (to, from, next) => {
            let data;
            let random_Regex = /[a-z0-9]{128}/;
            if (random_Regex.test(to.params.random)) {
                next();
            } else {
                next("notfound");
            }
        }
    },
    {
        path: "/*",
        name: "notfound",
        component: notfound
    }
];
