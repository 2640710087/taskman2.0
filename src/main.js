import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router/router";
import store from "./store";
import "iview/dist/styles/iview.css";
import error from "./locale/code/error";
import success from "./locale/code/success";
import { Message } from "iview";
import moduleslist from "./router/checkmodule";
import App from "./App";
// import Mock from "./plugins/mock";

// vue config production tip
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.prototype.$Lang = "zh-CN";
Vue.prototype.$Message = Message;
Vue.prototype.$codeMsg = (code, lang = "en") => error(code)["msg"][lang];
Vue.prototype.$Message.config({
  top: 80,
  duration: 3
});
Vue.prototype.$Tip = (code, lang = "en") => {
  if (code >= 200 && code < 300) {
    Message.success(success(code)["msg"][lang]);
  } else if (code >= 300) {
    Message.error(error(code)["msg"][lang]);
  }
};
// router defined
const router = new VueRouter({
  routes
});
router.beforeEach(async (to, from, next) => {
  // let moduledist;
  // console.log(store);
  // let modulenamelist = Object.keys(moduledist);
  // if (modulenamelist.includes(to.name)) {
  //   if (!moduledist[to.name]) {
  //     next("/notfound");
  //   } else {
  //     next();
  //   }
  // } else {
  //   next();
  // }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
