import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PaginaCarregando from "@/components/PaginaCarregando";
import ErroNotificacao from "@/components/ErroNotificacao";

Vue.config.productionTip = false;

Vue.component("PaginaCarregando", PaginaCarregando);
Vue.component("ErroNotificacao", ErroNotificacao);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
