import Vue from "vue";
import Vuex from "vuex";
import {
    // ISCROLL,
    USER_INFO,
    SEARCH
} from "./modules";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        // ISCROLL,
        USER_INFO,
        SEARCH
    }
});