import article from "../page/home/user";

// const ISCROLL = {
//     state: {
//         iscroll: null
//     },
//     mutations: {
//         setIscroll(state, iscroll) {
//             state.iscroll = iscroll;
//         },
//         refresh(state) {
//             state.iscroll.refresh();
//         }
//     }
// }

const USER_INFO = {
    state: {
        username: null,
        token: null
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.username = userInfo.username;
            state.token = userInfo.token;
        }
    },
    getters: {
        getUserInfo(state) {
            return state
        }
    }
}

const SEARCH = {
    state: {
        query: '',
        type: 'article',
        queryResult: {
            article: [],
            tag: [],
            user: []
        }
    },
    mutations: {
        query(state, query) {
            state.query = query;
        },
        setType(state, type) {
            state.type = type
        },
        setQueryResult(state, {
            article,
            tag,
            user
        }) {
            state.queryResult.article = article
            state.queryResult.tag = tag
            state.queryResult.user = user

        },
        clearSearch(state) {
            state.query = ''
            state.queryResult = {
                article: [],
                tag: [],
                user: []
            }
        }
    },
    getters: {
        getType(state) {
            return state.type
        },
        getSearch(state) {
            return state
        },
        getArticle(state) {
            return state.queryResult.article
        },
        getTag(state){
            return state.queryResult.tag
        },
        getUser(state) {
            return state.queryResult.user
        }
    }
}
export {
    // ISCROLL,
    USER_INFO,
    SEARCH
}