// Packages
import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import Chart from "vue2-frappe";

// Vue components
import App from "./App.vue";

// CSS
import "./assets/tailwind.css";

Vue.config.productionTip = false;

// Connect packages to Vue
Vue.use(VueCompositionApi);
Vue.use(Chart);

new Vue({
  render: h => h(App)
}).$mount("#app");
