import Vue from "vue";
import router from "@/router";
import store from "@/store";
import {ajax, regex } from "@/utils";
import App from "@/App.vue";
import "@/element-ui"
import "@/App.styl";

Vue.config.productionTip = false;

if (process.globalConfig.uweb) {
  require("@/uweb");
}

Vue.mixin(ajax);
Vue.mixin(regex);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
