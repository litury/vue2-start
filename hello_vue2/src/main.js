import Vue from "vue";
import App from "./App.vue";
import Square from "./components/Square.vue";

Vue.component("Square", Square);
Vue.config.productonTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
