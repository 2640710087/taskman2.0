// import task from '../page/task/task';
import {
    checkLink as checklink
} from "../plugins/account/resetPassword";

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

const notFound = r =>
    require.ensure(
        [],
        () => r(require("../page/notFound/notfound")),
        "notFound"
    );

const home = r =>
    require.ensure([], () => r(require("../page/home/home")), "home");

const article = r =>
    require.ensure([], () => r(require("../page/home/article")), "article");

const user = r =>
    require.ensure([], () => r(require("../page/home/user")), "user");

const lable = r =>
    require.ensure([], () => r(require("../page/home/lable")), "lable");

const search = r =>
    require.ensure([], () => r(require("../page/home/search")), "search");

const addArt = r =>
    require.ensure([], () => r(require("../page/home/addArt")), "addArt");

const edit = r =>
    require.ensure([], () => r(require("../page/home/edit")), "edit");

const upload = r =>
    require.ensure([], () => r(require("../page/home/upload")), "upload");

const edits = r =>
    require.ensure([], () => r(require("../page/home/upload/uploadimg.vue")), "uploadimg");

const searchArt = r =>
    require.ensure([], () => r(require("../page/home/search/article.vue")), "searchArt");

const searchLab = r =>
    require.ensure([], () => r(require("../page/home/search/label.vue")), "searchLab");
const searchUser = r =>
    require.ensure([], () => r(require("../page/home/search/user.vue")), "searchUser");
export default [{
        path: "/",
        name: "index",
        component: home,
        redirect: "article",
        children: [{
                path: "article",
                name: "article",
                component: article
            },
            {
                path: "user/:username",
                name: "user",
                component: user
            },
            {
                path: "article/edit",
                name: "edit",
                component: edit
            },
            {
                path: "article/add",
                name: "add",
                component: addArt
            },
            {
                path: "search",
                name: "search-page",
                component: search,
                children: [{
                        path: 'article/:query',
                        name: 'search-article',
                        component: searchArt
                    },
                    {
                        path: 'label/:query',
                        name: 'search-label',
                        component: searchLab
                    },
                    {
                        path: 'user/:query',
                        name: 'search-user',
                        component: searchUser
                    },
                    {
                        path: 'article',
                        name: 'search-not-param-a',
                        redirect: '/search'
                    },
                    {
                        path: 'label',
                        name: 'search-not-param-l',
                        redirect: '/search'
                    },
                    {
                        path: 'user',
                        name: 'search-not-param-u',
                        redirect: '/search'
                    }
                ]
            },
            {
                path: "upload",
                name: "upload",
                component: addArt
            },
            {
                path: "article/edits",
                name: "edits",
                component: edits
            },
            {
                path: "article/lable/:lable",
                name: "lable",
                component: lable
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
        path: "/reset_password/:random",
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
        component: notFound,
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
        path: "/notfound",
        name: "notfound",
        component: notFound
    },
    {
        path: "/*",
        name: "nomatch",
        component: notFound
    }
];