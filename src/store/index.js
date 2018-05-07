import Vue from "vue";
import Vuex from "vuex";
import {
    Iscroll
} from "./modules";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        articleList: null
    },
    mutations: {
        refreshArt(state, art) {
            state.articleList = art;
        }
    },
    modules: {
        Iscroll
    }
});
