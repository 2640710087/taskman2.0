const ISCROLL = {
    state: {
        iscroll: null
    },
    mutations: {
        setIscroll(state, iscroll) {
            state.iscroll = iscroll;
        },
        refresh(state) {
            state.iscroll.refresh();
        }
    }
}

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
        query: ''
    },
    mutations: {
        search(state, query) {
            state.query = query;
        }
    },
    getters: {
        getSearch(state) {
            return state.query;
        }
    }
}
export {
    ISCROLL,
    USER_INFO,
    SEARCH
}