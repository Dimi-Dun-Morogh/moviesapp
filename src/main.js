import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./plugins/bootstrap";
import Router from "vue-router";
Vue.config.productionTip = false;
Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "root",
      component: App
    }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
