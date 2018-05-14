const ISCROLL = {
    state: {
        iscroll: null
    },
    mutations: {
        setIscroll(state, iscroll) {
            state.iscroll = iscroll;
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
            state.token = username.token;
        }
    }
}

export {
    ISCROLL,
    USER_INFO
}
