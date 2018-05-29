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

export {
    ISCROLL,
    USER_INFO
}