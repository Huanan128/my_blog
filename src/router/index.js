import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@views/front/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/forhome",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
