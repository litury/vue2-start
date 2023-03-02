import Vue from "vue";
import App from "./App.vue";

Vue.config.productonTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
