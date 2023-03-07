import Vue from "vue";
import App from "./App.vue";
import { VueSpinners } from "@saeris/vue-spinners";

Vue.use(VueSpinners);

Vue.config.productonTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
