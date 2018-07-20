// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import iView from "iview";
import rdd from "./rdd.js";
import App from "./App";
import "iview/dist/styles/iview.css";

Vue.config.productionTip = false;

Vue.use(iView);
Vue.use(rdd, {
  isDev: true
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
