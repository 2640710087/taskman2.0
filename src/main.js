import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router/router";
import App from "./App";
import "iview/dist/styles/iview.css";
import error from './locale/code/error';
import success from './locale/code/success';
import { Message } from "iview";
Vue.use(VueRouter);

Vue.prototype.$Message = Message;
Vue.prototype.$codeMsg = (code, lang = 'en') => error(code)['msg'][lang]; 

Vue.prototype.$Tip = (code, lang = 'en') => {
  if (code >= 200 && code < 300) {
    Message.success(success(code)['msg'][lang]);
  }else if (code >= 300) {
    Message.error(error(code)['msg'][lang]);
  }
}

Vue.prototype.$Message.config({
  top: 80,
  duration: 3
});

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

Vue.prototype.$Lang = "en";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
